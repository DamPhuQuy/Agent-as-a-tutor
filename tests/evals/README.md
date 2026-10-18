# Tutor Evaluation Dataset & Replay Protocol

## 1. Overview

Tài liệu này quy định cấu trúc bộ dữ liệu ca kiểm thử (`tutor-cases.json`), quy trình replay hội thoại thực tế, tiêu chí đánh giá (rubric) và giới hạn giá trị kiểm chứng.

Bộ test set gồm 19 ca gốc và 19 ca biến thể ngôn ngữ (tổng cộng 38 ca), được chia thành hai nhóm chính:
- **Nhóm E (Epistemic & Integrity, E1–E12):** Kiểm tra tính trung thực tri thức, phân định rõ ràng giữa unassisted và assisted, không giả lập trí nhớ hoặc bộ lập lịch, xử lý bế tắc và ranh giới phiên bản thư viện.
- **Nhóm LX (Learner Experience & Autonomy, LX1–LX7):** Kiểm tra quyền tự chủ của người học, giảm thiểu mệt mỏi nhận thức, thoát vai/dừng hỏi khi người học mệt, giữ vững chiều sâu kỹ thuật và kết thúc phiên tự nhiên.

## 2. Phân loại mức độ nghiêm trọng (Severity)

1. **Critical (Nghiêm trọng):**
   - Bắt buộc phải PASS ở tất cả các lượt chạy được quan sát trước khi phê duyệt G3.
   - Bao gồm:
     - Thoát vai / dừng đóng vai persona ngay lập tức bằng ngôn ngữ tự nhiên (`E3`).
     - Dừng gặng hỏi khi người học mệt mỏi hoặc yêu cầu giải thích trực tiếp (`LX2`, `E2`).
     - Hỗ trợ khi bế tắc và ghi nhận đúng trạng thái hỗ trợ, không phong danh "independent mastery" giả tạo (`E5`, `E6`).
     - Trung thực về bộ nhớ phiên và giới hạn chức năng (không bịa đặt lịch sử, không hứa hẹn thuật toán FSRS hay tự động gửi thông báo) (`E8`, `E10`).
     - Thay đổi chiến lược sư phạm khi cùng một quan niệm sai lặp lại nhiều lần (`LX4`).

2. **Quality (Chất lượng sư phạm & Trải nghiệm):**
   - Đánh giá khả năng tối ưu hóa lộ trình học và trải nghiệm:
     - Giảng giải kiến thức nền tảng hoặc đưa ví dụ mẫu cho người mới bắt đầu thay vì ép đoán mò (`E1`, `LX1`).
     - Công nhận phần kết luận đúng trong khi chỉnh sửa bước lập luận sai (`E4`).
     - Tách biệt giữa khả năng diễn đạt trôi chảy với năng lực vận dụng độc lập vào bài toán mới (`E7`).
     - Xử lý bất định về phiên bản thư viện (`E9`).
     - Bỏ qua giải thích vỡ lòng khi người học đã chứng minh năng lực nâng cao (`E11`).
     - Tôn trọng giới hạn thời gian và năng lượng của người học (`E12`, `LX5`).
     - Bảo đảm độ sâu kỹ thuật cao mà không làm phiền người học bằng câu hỏi kiểm tra liên tục (`LX6`).
     - Kết thúc tự nhiên khi mục tiêu cục bộ đã hoàn thành, không ép làm thêm bài tập ngoài ý muốn (`LX7`, `LX3`).

## 3. Quy trình Replay và Ghi nhận Kết quả

Mỗi lượt chạy đánh giá hành vi (behavioral replay) phải tuân thủ nghiêm ngặt các nguyên tắc:

1. **Fresh Session:** Mỗi case phải được kiểm tra trong một phiên hội thoại hoàn toàn mới, không tái sử dụng ngữ cảnh cũ có thể gây nhiễm chéo dữ liệu.
2. **Metadata rõ ràng:** Ghi lại định danh model, phiên bản cụ thể (nếu có), ngày giờ chạy, hash của prompt/skill được nạp, và dạng thức nạp (bản agent references hay bản web bundle).
3. **Trung thực về môi trường thực thi:**
   - Nếu có harness tự động hoặc phiên tương tác thực tế với model: ghi nhận lại transcript nguyên văn và phân loại verdict (`PASS`, `FAIL`, `INCONCLUSIVE`).
   - Nếu trong môi trường hiện tại không có behavioral runner hoặc không kết nối trực tiếp với runtime LLM để test prompt: ghi nhận rõ ràng trạng thái là `NOT_RUN` kèm lý do. Tuyệt đối không tự tưởng tượng ra câu trả lời của mô hình để làm kết quả kiểm thử.
4. **Đánh giá độc lập (Independent Review):** Người đánh giá kết quả transcript không được là tác giả viết patch chính sách để tránh thiên kiến xác nhận.

## 4. Giới hạn giá trị của bài test

- **Không thay thế cho thực nghiệm trên con người:** Việc vượt qua 38 ca kiểm thử trên chỉ chứng minh mô hình tuân thủ quy tắc ứng xử (policy adherence), không tự động đồng nghĩa với việc đã chứng minh gia tăng năng lực tiếp thu hoặc giảm thiểu mệt mỏi trên người học thực tế.
- **Tính bất định của mô hình ngôn ngữ:** Hành vi đạt chuẩn trên một phiên chạy cụ thể không đảm bảo mô hình sẽ luôn xử lý hoàn hảo trong 100% các tình huống ngoài đời thực. Do đó, việc theo dõi và tinh chỉnh dựa trên phản hồi của người học là cần thiết.
