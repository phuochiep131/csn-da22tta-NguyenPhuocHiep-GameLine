# Game-Lines
## Tác giả: Nguyễn Phước Hiệp - 110122005 - DA22TTA
## Email: nphhiep1301@gmail.com

## Giới thiệu
Đây là dự án tôi về "Phát triển game Lines trên web sử dụng MediaPipe với tương tác điều khiển bằng cử chỉ tay". Tôi đã triển khai dự án này bằng cách sử dụng HTML, CSS, JavaScript và sử dụng thư viện MediaPipe để nhận diện cử chỉ tay từ người chơi. 

Với sự phát triển vượt bậc của công nghệ, các cách thức tương tác giữa con người và máy tính liên tục được cải tiến. Từ những thiết bị truyền thống như bàn phím và chuột, công nghệ hiện đại đã chuyển hướng sang các phương thức tương tác không chạm, bao gồm nhận diện cử chỉ, nhận diện khuôn mặt và theo dõi chuyển động cơ thể. Những bước tiến này không chỉ nâng cao sự tiện lợi mà còn mang đến nhiều trải nghiệm độc đáo và sáng tạo trong các lĩnh vực như y tế, giáo dục, và đặc biệt là giải trí.

Game Lines là một trò chơi giải trí cổ điển, đây là một trò chơi đơn giản nhưng cần sự tập trung cao nhờ vào lối chơi chiến thuật, yêu cầu người chơi phải tư duy và lên kế hoạch di chuyển hiệu quả. Trò chơi đã xuất hiện từ lâu và nhận được sự yêu thích của nhiều thế hệ. Tuy nhiên, với sự phát triển nhanh chóng của công nghệ, đặc biệt là trong lĩnh vực phát triển ứng dụng web và trí tuệ nhân tạo, việc đổi mới cách thức người chơi tương tác với game trở thành một hướng nghiên cứu đầy tiềm năng.

Đề tài này hướng đến việc phát triển phiên bản khác của game Lines trên nền tảng web, kết hợp với công nghệ MediaPipe để mang lại trải nghiệm mới mẻ cho người chơi. MediaPipe là một thư viện mã nguồn mở của Google, cung cấp các giải pháp AI như nhận diện bàn tay, khuôn mặt, cử chỉ và chuyển động cơ thể,... Việc tích hợp MediaPipe vào trò chơi không chỉ mang lại sự tương tác tự nhiên và linh hoạt mà còn mở ra cơ hội khám phá những ứng dụng của AI trong lĩnh vực giải trí, giáo dục và các lĩnh vực khác.

## Trình tự thực hiện đồ án  
- Bước 1: Tìm hiểu game Lines và MediaPipe  
	- Tìm hiểu về luật chơi, cơ chế trò chơi của game Lines.  
	- Tìm hiểu về MediaPipe, nghiên cứu tập trung về MediaPipe Hands dùng để nhận diện cử chỉ tay.  
	- Tìm hiểu về HTML, CSS, JavaScript, một số cách thức làm việc với sự kiện trong JavaScript.  
- Bước 2: Xây dựng trò chơi trên web  
	- Thiết kế giao diện trò chơi  
	- Sử dụng HTML, CSS để xây dựng giao diện nhập tên và giao diện chính của game.  
	- Sử dụng JavaScript để xử lí các sự kiện để tương tác với người chơi, thiết kế các logic của game như tạo bóng và bóng dự đoán ngẫu nhiên, di chuyển bóng, cập nhật điểm, kết thúc trò chơi.  
	- Sử dụng thuật toán tìm đường đi BFS để thực hiện việc di chuyển bóng giữa hai điểm bất kì.  
	- Sử dụng Realtime Database của Firebase để minh họa một bảng xếp hạng.  
	- Cài đặt và ứng dụng thư viện MediaPipe để xử lí cử chỉ tay, từ đó đặt ra điều kiện cho cử chỉ tay để người chơi tương tác với trò chơi.  
- Bước 3: Kiểm tra, tích hợp thêm các tính năng bổ sung  
	- Kiểm thử độ chính xác của các tính năng được điều khiển bằng cử chỉ tay.  
	- Cải thiện lại giao diện, thêm âm thanh và bảng xếp hạng.  

## Cách chạy chương trình
Tải Visual Studio Code và cài đặt về máy.  
Mở Visual Studio Code và cài các extensions về JavaScript và Live Server.  
Tải toàn bộ mã nguồn từ thư mục scr, tiếp đến chỉ cần nháy phải chuột vào file "index.html" bên trong thư mục scr --> Open with Live Server là đã có thể chạy được trò chơi.  
