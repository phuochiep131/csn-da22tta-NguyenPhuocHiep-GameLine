
import cv2
import mediapipe as mp
import time
import pyautogui
import math

pTime = 0
DS = []

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(max_num_hands=2, min_detection_confidence=0.7)
mp_draw = mp.solutions.drawing_utils

def Phat_hien_tay(frame):
    DanhSachMoc = []
    frame = cv2.flip(frame, 1)
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Xử lý khung hình
    result = hands.process(rgb_frame)

    if result.multi_hand_landmarks:
        for hand_landmarks in result.multi_hand_landmarks:
            mp_draw.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            for id, landmark in enumerate(hand_landmarks.landmark):
                h, w, c = frame.shape
                cx, cy = int(landmark.x * w), int(landmark.y * h)
                DanhSachMoc.append([id, cx, cy])
                cv2.circle(frame, (cx, cy), 5, (255, 0, 0), cv2.FILLED)
    return frame, DanhSachMoc


def tinh_khoang_cach(DS, diem1, diem2):
    if len(DS) > max(diem1, diem2):
        x1, y1 = DS[diem1][1], DS[diem1][2]
        x2, y2 = DS[diem2][1], DS[diem2][2]
        distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        return distance
    else:
        return None


def main():
    global pTime
    cap = cv2.VideoCapture(0)
    click = 0

    screen_width, screen_height = pyautogui.size()

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        frame, DS = Phat_hien_tay(frame)
        cTime = time.time()
        fps = 1 / (cTime - pTime)
        pTime = cTime

        cv2.putText(frame, f"FPS: {int(fps)}", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)

        if len(DS) != 0:
            print(DS[4:6])

            index_finger_tip = DS[8]
            if index_finger_tip:
                screen_x = int(index_finger_tip[1] / frame.shape[1] * screen_width)
                screen_y = int(index_finger_tip[2] / frame.shape[0] * screen_height)

                khoang_cach = tinh_khoang_cach(DS, 4, 5)
                if tinh_khoang_cach(DS, 3, 5) <=20 and DS[8][2] < DS[6][2] and DS[12][2] < DS[10][2] and DS[16][2] > DS[15][2] and DS[20][2] > DS[19][2]:
                    pyautogui.moveTo(screen_x, screen_y, duration=0.1)

                if DS[8][2] > DS[6][2] and DS[12][2] > DS[10][2]:
                    click = click + 1
                    if click % 8 == 0:
                        pyautogui.click()

        cv2.imshow('Frame', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    main()
