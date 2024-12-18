import sys
import pygame
from flask import Flask, jsonify
from threading import Thread

app = Flask(__name__)

# Giả sử trong pygame.py bạn đã có hàm main() để khởi chạy trò chơi
def run_pygame():
    pygame.main()  # Gọi hàm main() để bắt đầu trò chơi

@app.route('/start_game', methods=['GET'])
def start_game():
    """Khởi chạy trò chơi Pygame trong một luồng riêng biệt"""
    thread = Thread(target=run_pygame)
    thread.start()
    return jsonify({"message": "Game started"})

@app.route('/game_status', methods=['GET'])
def game_status():
    """Trả về trạng thái của trò chơi"""
    return jsonify({"status": "Game is running"})

if __name__ == '__main__':
    app.run(debug=True)
