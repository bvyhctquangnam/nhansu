// ==================== DỮ LIỆU NHÂN SỰ ====================
const staffData = [
    { cccd: "079201000001", name: "Nguyễn Thị Thủy", khoa: "Nội", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "CKII", cchn: "001814/QNA-CCHN", phamVi: "Nội khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000002", name: "Trần Thị Lý", khoa: "Nội", chucvu: "Phó khoa", chucdanh: "Bác sĩ", trinhdo: "BSCKI", cchn: "001809/QNA-CCHN", phamVi: "Nội khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000003", name: "Huỳnh Thị Bình", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001784/QNA-CCHN", phamVi: "Nội khoa", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000004", name: "Nguyễn Thị Thuyền", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "008517/QNA-CCHN", phamVi: "Nội khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000005", name: "Trần Văn Dung", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001821/QNA-CCHN", phamVi: "Nội khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000006", name: "Nguyễn Thị Miên", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cử nhân", cchn: "001850/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000007", name: "Nguyễn Thị Bích Nga", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cử nhân", cchn: "001794/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000008", name: "La Thị Lam", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001790/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000009", name: "Trịnh Kiều Anh", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "007307/QNA-CCHN", phamVi: "Nội khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000010", name: "Bùi Hà Nam", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "3190/CCHN-D-SYT-QNA", phamVi: "Nội khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000011", name: "Huỳnh Thị Kim Minh", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cử nhân", cchn: "3195/CCHN-D-SYT-QNA", phamVi: "Điều dưỡng", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000012", name: "Nguyễn Ngọc Tuấn", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "77/CCHN-D-SYT-QNA", phamVi: "Nội khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000013", name: "Phạm Thị Lan", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cử nhân", cchn: "3347/CCHN-D-SYT-QNA", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000014", name: "Nguyễn Văn An", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001901/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000015", name: "Trần Thị Bình", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001902/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000016", name: "Lý Thị Vui", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001909/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000017", name: "Nguyễn Văn Dũng", khoa: "Ngoại", chucvu: "Phó khoa", chucdanh: "Bác sĩ", trinhdo: "CKII", cchn: "005756/QNA-CCHN", phamVi: "Ngoại khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000018", name: "Nguyễn Thị Thu Trang", khoa: "Ngoại", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "BSCKI", cchn: "001812/QNA-CCHN", phamVi: "Ngoại khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000019", name: "Phan Thị Phương", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cử nhân", cchn: "3348/CCHN-D-SYT-QNA", phamVi: "Điều dưỡng", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000020", name: "Ngô Thị Hòa", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "3349/CCHN-D-SYT-QNA", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000021", name: "Đặng Thị Văn", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001838/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000022", name: "Nguyễn Thị Thu Hương", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001842/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000023", name: "Nguyễn Quang Ngọc", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "005757/QNA-CCHN", phamVi: "Ngoại khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000024", name: "Trần Thị Ánh Tuyết", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001836/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000025", name: "Trương Văn Thảo", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001827/QNA-CCHN", phamVi: "Ngoại khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000026", name: "Nguyễn Thị Minh Phương", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001802/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000027", name: "Lê Văn Cường", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001903/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000028", name: "Mai Văn Xứng", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001910/QNA-CCHN", phamVi: "Ngoại khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000029", name: "Lương Văn Tuấn", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001933/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000030", name: "Đào Nguyễn Hà Yên", khoa: "Lão", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "3344/CCHN-D-SYT-QNA", phamVi: "Lão khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000031", name: "Lê Thị Thu Nga", khoa: "Lão", chucvu: "Phó khoa", chucdanh: "Điều dưỡng", trinhdo: "CKI", cchn: "3345/CCHN-D-SYT-QNA", phamVi: "Lão khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000032", name: "Võ Tấn Đệ", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "005271/QNA-CCHN", phamVi: "Lão khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000033", name: "Châu Trinh Thương", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "000388/QNA-GPHN", phamVi: "Lão khoa", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000034", name: "Nguyễn Hoàng Thạch", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001484/QNA-CCHN", phamVi: "Lão khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000035", name: "Lê Thị Lệ Thi", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001805/QNA-CCHN", phamVi: "Lão khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000036", name: "Trần Thị Lợi", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001792/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000037", name: "Nguyễn Thị Thu Triều", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001825/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000038", name: "Trương Văn Hoàng", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001808/QNA-CCHN", phamVi: "Lão khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000039", name: "Nguyễn Thị Cúc", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001849/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000040", name: "Trần Thị Thu Sương", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001799/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000041", name: "Ung Thu Hiền", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "006833/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000042", name: "Phạm Thị Dung", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001904/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000043", name: "Kim Thị Yến", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001911/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000044", name: "Nguyễn Thị Hồng Phước", khoa: "Châm cứu", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "CKII", cchn: "0016506/BYT-CCHN", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000045", name: "Dương Hồng Thuận", khoa: "Châm cứu", chucvu: "Phó khoa", chucdanh: "Bác sĩ", trinhdo: "BSCKI", cchn: "001811/QNA-CCHN", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000046", name: "Võ Thị Thùy Linh", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001656/ĐNA-GPHN", phamVi: "Châm cứu", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000047", name: "Nguyễn Thị Thùy Trang", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "3350/CCHN-D-SYT-QNA", phamVi: "Châm cứu", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000048", name: "Hoàng Vũ Gia Ly", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "668/QNA-CCHND", phamVi: "Châm cứu", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000049", name: "Trần Thị Thu Duyên", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "1299/CCHN-D-SYT-QNA", phamVi: "Châm cứu", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000050", name: "Phạm Thị Nhân", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "006252/QNA-CCHN", phamVi: "Châm cứu", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000051", name: "Lưu Thị Kim Xuyến", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "005268/QNA-CCHN", phamVi: "Châm cứu", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000052", name: "Hoàng Văn Em", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001905/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000053", name: "Hà Văn Chiến", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001912/QNA-CCHN", phamVi: "Châm cứu", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000054", name: "Hoàng Thị Thu", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001928/QNA-CCHN", phamVi: "Châm cứu", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000055", name: "Hà Thị Liên", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001937/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000056", name: "Trần Thanh Dương", khoa: "PHCN", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "CKII", cchn: "006039/DNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000057", name: "Nguyễn Tấn Thiên", khoa: "PHCN", chucvu: "Phó khoa", chucdanh: "Bác sĩ", trinhdo: "BSCKI", cchn: "005529/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000058", name: "Nguyễn Thị Như Thảo", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "003204/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000059", name: "Phan Trần Văn Châu", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001820/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000060", name: "Nguyễn Thị Sâm", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001817/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000061", name: "Huỳnh Thị Thu Thủy", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "005272/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000062", name: "Mai Thị Phương Thảo", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001819/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000063", name: "Hồ Hoàng Minh Quang", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001851/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000064", name: "Nguyễn Thị Hoàng Trinh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001057/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000065", name: "Huỳnh Lục Ánh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "007311/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000066", name: "Huỳnh Thị Sang", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001834/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000067", name: "Nguyễn Thị Thu Vinh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "3341/CCHN-D-SYT-QNA", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000068", name: "Nguyễn Thị Thanh Thuận", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "3342/CCHN-D-SYT-QNA", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000069", name: "Lê Thị Ánh Sáng", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "3343/CCHN-D-SYT-QNA", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000070", name: "Trương Thị Huyền Long", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "3346/CCHN-D-SYT-QNA", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000071", name: "Nguyễn Hoài Phương", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001831/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000072", name: "Lê Thị Minh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001785/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000073", name: "Nguyễn Thị Thu Ngân", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001783/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000074", name: "Nguyễn Thị Phương", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001804/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000075", name: "Phạm Khắc Kim Thành", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001833/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000076", name: "Võ Thị Thu Thủy", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001787/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000077", name: "Trần Lê Thiên Phúc", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "000389/QNA-GPHN", phamVi: "Y học", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000078", name: "Võ Thị Phượng", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001906/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000079", name: "Phùng Thị Hạnh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001913/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000080", name: "Đỗ Thị Nhung", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001929/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000081", name: "Kiều Thị Phượng", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001935/QNA-CCHN", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000082", name: "Uông Thị Ánh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cử nhân", cchn: "001938/QNA-CCHN", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "079201000083", name: "Nguyễn Thị Sáu", khoa: "Dược", chucvu: "Trưởng khoa", chucdanh: "Dược sĩ", trinhdo: "Thạc sĩ", cchn: "1905/CCHN-D-SYT-QNA", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "079201000084", name: "Trịnh Thị Bê", khoa: "Dược", chucvu: "Phó khoa", chucdanh: "Dược sĩ", trinhdo: "CKI", cchn: "3470/CCHN-D-SYT-QNA", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "079201000085", name: "Bùi Thị Khiêm", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cử nhân", cchn: "005345/QNA-CCHN", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "079201000086", name: "Phạm Thị Thu Văn", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cử nhân", cchn: "001793/QNA-CCHN", phamVi: "Dược", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "079201000087", name: "Đặng Thị Quyên", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001907/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Dược" },
    { cccd: "079201000088", name: "Chu Văn Lợi", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cử nhân", cchn: "001914/QNA-CCHN", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "079201000089", name: "Vũ Thị Lan", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cử nhân", cchn: "001930/QNA-CCHN", phamVi: "Dược", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "079201000090", name: "Võ Trung Phong", khoa: "KB&XN-CĐHA", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "BSCKI", cchn: "000812/QNA-CCHN", phamVi: "CĐHA", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000091", name: "Nguyễn Thị Kim Vân", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001688/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000092", name: "Nguyễn Thị Ngọc Nga", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001843/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000093", name: "Phan Thị Lê Nhi", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001828/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000094", name: "Nguyễn Trần Huỳnh Tâm", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "005269/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000095", name: "Đinh Công Minh", khoa: "KB&XN-CĐHA", chucvu: "Phó khoa", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "000413/QNA-CCHN", phamVi: "CĐHA", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000096", name: "Lê Thị Hường", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "030102/BYT-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000097", name: "Bùi Thị Thanh Vân", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001800/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000098", name: "Nguyễn Thị Ánh Quang", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "0016498/BYT-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000099", name: "Vỗ Thị Oanh Thu", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001758/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000100", name: "Đỗ Thị Minh Tâm", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "003691/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000101", name: "Trương Thị Vân", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "004357/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000102", name: "Châu Thị Phương Nga", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001815/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000103", name: "Ngô Ngọc Toàn", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001844/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000104", name: "Huỳnh Thị Đan Hạ", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "002928/QNA-CCHN", phamVi: "Y học", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000105", name: "Đinh Thị Hương", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cử nhân", cchn: "001931/QNA-CCHN", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000106", name: "Tạ Văn Đức", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001936/QNA-CCHN", phamVi: "CĐHA", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000107", name: "Lê Thị Minh Tâm", khoa: "TC-HC&TC-KT", chucvu: "Trưởng phòng", chucdanh: "Nhân viên", trinhdo: "Thạc sĩ", cchn: "", phamVi: "Quản lý", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "TC-HC&TC-KT" },
    { cccd: "079201000108", name: "Nguyễn Thị Kim Oanh", khoa: "TC-HC&TC-KT", chucvu: "Phó phòng", chucdanh: "Nhân viên", trinhdo: "CKI", cchn: "", phamVi: "Kế toán", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "TC-HC&TC-KT" },
    { cccd: "079201000109", name: "Trần Văn Bình", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Kế toán", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "TC-HC&TC-KT" },
    { cccd: "079201000110", name: "Phạm Thị Mai", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Trung cấp", cchn: "", phamVi: "Tài chính", isYTe: false, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "TC-HC&TC-KT" },
    { cccd: "079201000111", name: "Nguyễn Văn Nam", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Hành chính", isYTe: false, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "TC-HC&TC-KT" },
    { cccd: "079201000112", name: "Trương Thị Thu", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Kế toán", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "TC-HC&TC-KT" },
    { cccd: "079201000113", name: "Ngô Thị Tuyết", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Trung cấp", cchn: "", phamVi: "Hành chính", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "TC-HC&TC-KT" },
    { cccd: "079201000114", name: "Nguyễn Văn D", khoa: "KHTH-ĐD", chucvu: "Trưởng phòng", chucdanh: "Bác sĩ", trinhdo: "CKI", cchn: "", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "079201000115", name: "Nguyễn Văn Hải", khoa: "KHTH-ĐD", chucvu: "Phó phòng", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Kế hoạch", isYTe: false, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "KHTH-ĐD" },
    { cccd: "079201000116", name: "Trần Thị Hồng", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Điều dưỡng", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KHTH-ĐD" },
    { cccd: "079201000117", name: "Hoàng Thị Lan", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Tổng hợp", isYTe: false, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "KHTH-ĐD" },
    { cccd: "079201000118", name: "Phạm Thị Hoa", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Trung cấp", cchn: "", phamVi: "Điều dưỡng", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KHTH-ĐD" },
    { cccd: "079201000119", name: "Nguyễn Thị Hương", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Điều dưỡng", isYTe: false, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "KHTH-ĐD" },
    { cccd: "079201000120", name: "Trương Văn Út", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Kế hoạch", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KHTH-ĐD" },
    { cccd: "079201000121", name: "Trịnh Thị Oanh", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Nhân viên", trinhdo: "Cử nhân", cchn: "", phamVi: "Điều dưỡng", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KHTH-ĐD" },
    { cccd: "079201000122", name: "Lê Văn A (trùng tên)", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "TEST001", phamVi: "Nội khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "079201000123", name: "Lê Văn A (trùng tên)", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cử nhân", cchn: "TEST002", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" }
];

// Khởi tạo thuộc tính hasCCHN
for (let i = 0; i < staffData.length; i++) {
    staffData[i].hasCCHN = staffData[i].cchn && staffData[i].cchn.length > 0;
}

// Map để tra cứu nhanh theo CCCD
const staffMap = new Map();
for (const staff of staffData) {
    staffMap.set(staff.cccd, staff);
}

const soGiuong = { "Nội": 37, "Ngoại": 23, "Lão": 37, "Châm cứu": 23, "PHCN": 30, "Dược": 0, "KB&XN-CĐHA": 0, "TC-HC&TC-KT": 0, "KHTH-ĐD": 0 };
const tongGiuong = 150;

let currentYear = 2026;
let currentLoaiHinhFilter = "all";
let currentDeptFilter = "all";
let currentChucvuFilter = "all";
let currentChucdanhFilter = "all";
let currentNoiHanhNgheFilter = "all";
let currentSearch = "";
let deptChart = null;
let pieChart1 = null;
let pieChart2 = null;

function getStaffForYear(year) {
    return staffData.map(staff => ({ ...staff, cme: staff[`cme${year}`] }));
}

function updateSummaryPieCharts(allStaff) {
    const totalNhanVien = allStaff.length;
    const totalNhanVienYTe = allStaff.filter(s => s.isYTe === true).length;
    const totalNhanVienHC = totalNhanVien - totalNhanVienYTe;
    
    const ctx1 = document.getElementById('pieChart1').getContext('2d');
    if (pieChart1) pieChart1.destroy();
    pieChart1 = new Chart(ctx1, {
        type: 'doughnut',
        data: { labels: ['NV y tế', 'Hành chính'], datasets: [{ data: [totalNhanVienYTe, totalNhanVienHC], backgroundColor: ['#2dd4bf', '#facc15'], borderWidth: 0, cutout: '55%' }] },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw} (${((ctx.raw / totalNhanVien) * 100).toFixed(1)}%)` } } } }
    });
    document.getElementById('pie1Legend').innerHTML = `
        <span><span class="legend-dot" style="background:#2dd4bf;"></span> NV y tế: ${totalNhanVienYTe} (${((totalNhanVienYTe / totalNhanVien) * 100).toFixed(1)}%)</span>
        <span><span class="legend-dot" style="background:#facc15;"></span> Hành chính: ${totalNhanVienHC} (${((totalNhanVienHC / totalNhanVien) * 100).toFixed(1)}%)</span>
    `;
    
    const bs = allStaff.filter(s => s.chucdanh === "Bác sĩ" && s.isYTe === true).length;
    const ys = allStaff.filter(s => s.chucdanh === "Y sĩ" && s.isYTe === true).length;
    const dd = allStaff.filter(s => s.chucdanh === "Điều dưỡng" && s.isYTe === true).length;
    const ktv = allStaff.filter(s => s.chucdanh === "Kỹ thuật viên" && s.isYTe === true).length;
    const ds = allStaff.filter(s => s.chucdanh === "Dược sĩ" && s.isYTe === true).length;
    
    const ctx2 = document.getElementById('pieChart2').getContext('2d');
    if (pieChart2) pieChart2.destroy();
    pieChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: { labels: ['Bác sĩ', 'Y sĩ', 'Điều dưỡng', 'KTV', 'Dược sĩ'], datasets: [{ data: [bs, ys, dd, ktv, ds], backgroundColor: ['#2dd4bf', '#06b6d4', '#facc15', '#a78bfa', '#fb7185'], borderWidth: 0, cutout: '55%' }] },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw} (${((ctx.raw / totalNhanVienYTe) * 100).toFixed(1)}%)` } } } }
    });
    document.getElementById('pie2Legend').innerHTML = `
        <span><span class="legend-dot" style="background:#2dd4bf;"></span> Bác sĩ: ${bs} (${((bs / totalNhanVienYTe) * 100).toFixed(1)}%)</span>
        <span><span class="legend-dot" style="background:#06b6d4;"></span> Y sĩ: ${ys} (${((ys / totalNhanVienYTe) * 100).toFixed(1)}%)</span>
        <span><span class="legend-dot" style="background:#facc15;"></span> Điều dưỡng: ${dd} (${((dd / totalNhanVienYTe) * 100).toFixed(1)}%)</span>
        <span><span class="legend-dot" style="background:#a78bfa;"></span> KTV: ${ktv} (${((ktv / totalNhanVienYTe) * 100).toFixed(1)}%)</span>
        <span><span class="legend-dot" style="background:#fb7185;"></span> Dược sĩ: ${ds} (${((ds / totalNhanVienYTe) * 100).toFixed(1)}%)</span>
    `;
}

function updateDashboard() {
    const allStaff = getStaffForYear(currentYear);
    
    let filteredStaff = [...allStaff];
    if (currentLoaiHinhFilter !== "all") {
        if (currentLoaiHinhFilter === "yte") filteredStaff = filteredStaff.filter(s => s.isYTe === true);
        else if (currentLoaiHinhFilter === "hanhchinh") filteredStaff = filteredStaff.filter(s => s.isYTe === false);
    }
    if (currentDeptFilter !== "all") filteredStaff = filteredStaff.filter(s => s.khoa === currentDeptFilter);
    if (currentChucvuFilter !== "all") filteredStaff = filteredStaff.filter(s => s.chucvu === currentChucvuFilter);
    if (currentChucdanhFilter !== "all") filteredStaff = filteredStaff.filter(s => s.chucdanh === currentChucdanhFilter);
    if (currentNoiHanhNgheFilter !== "all") filteredStaff = filteredStaff.filter(s => s.noiHanhNgheCuoi === currentNoiHanhNgheFilter);
    if (currentSearch.trim()) filteredStaff = filteredStaff.filter(s => 
        s.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
        s.khoa.toLowerCase().includes(currentSearch.toLowerCase()) ||
        (s.cchn && s.cchn.toLowerCase().includes(currentSearch.toLowerCase())) ||
        s.cccd.includes(currentSearch)
    );

    const filterStatusDiv = document.getElementById('filterStatus');
    const filterTextSpan = document.getElementById('filterText');
    let filterConditions = [];
    if (currentLoaiHinhFilter !== "all") filterConditions.push(currentLoaiHinhFilter === "yte" ? "🧑‍⚕️ NV y tế" : "📋 Hành chính");
    if (currentDeptFilter !== "all") filterConditions.push(`Khoa: ${currentDeptFilter}`);
    if (currentChucvuFilter !== "all") filterConditions.push(`Chức vụ: ${currentChucvuFilter}`);
    if (currentChucdanhFilter !== "all") filterConditions.push(`Chức danh: ${currentChucdanhFilter}`);
    if (currentNoiHanhNgheFilter !== "all") filterConditions.push(`Nơi HN: ${currentNoiHanhNgheFilter}`);
    if (currentSearch.trim()) filterConditions.push(`Tìm: "${currentSearch}"`);
    
    if (filterConditions.length > 0) {
        filterStatusDiv.style.display = "inline-flex";
        filterTextSpan.innerText = `Đang lọc: ${filterConditions.join(" • ")}`;
    } else {
        filterStatusDiv.style.display = "none";
    }

    const total = allStaff.length;
    document.getElementById('totalStaffCount').innerText = total;
    
    const totalNhanVienYTe = allStaff.filter(s => s.isYTe === true).length;
    const totalBacSi = allStaff.filter(s => s.chucdanh === "Bác sĩ").length;
    const totalYSi = allStaff.filter(s => s.chucdanh === "Y sĩ").length;
    const totalDieuDuong = allStaff.filter(s => s.chucdanh === "Điều dưỡng").length;
    const totalCCHN = allStaff.filter(s => s.hasCCHN && s.isYTe === true).length;
    const trainedCount = allStaff.filter(s => s.cme).length;
    const trainingRate = total ? (trainedCount / total * 100).toFixed(1) : 0;
    const sauDaiHoc = allStaff.filter(s => s.trinhdo === "Thạc sĩ" || s.trinhdo === "CKII" || s.trinhdo === "BSCKI" || s.trinhdo === "CKI" || s.trinhdo === "Tiến sĩ").length;

    document.getElementById('kpiGrid').innerHTML = `
        <div class="kpi-card"><div class="kpi-title">👥 Tổng nhân sự</div><div class="kpi-value">${total}</div><div class="kpi-compare">Toàn bệnh viện</div></div>
        <div class="kpi-card"><div class="kpi-title">🏥 Nhân viên y tế</div><div class="kpi-value">${totalNhanVienYTe}</div><div class="kpi-compare">Bác sĩ: ${totalBacSi} | Y sĩ: ${totalYSi} | ĐD: ${totalDieuDuong}</div></div>
        <div class="kpi-card"><div class="kpi-title">📜 Có GPHN</div><div class="kpi-value">${totalCCHN}</div><div class="kpi-compare">Tỷ lệ: ${totalNhanVienYTe ? (totalCCHN/totalNhanVienYTe*100).toFixed(1) : 0}% (trên NV y tế)</div></div>
        <div class="kpi-card"><div class="kpi-title">🎓 Trình độ sau đại học</div><div class="kpi-value">${sauDaiHoc}</div><div class="kpi-compare">Tiến sĩ/CKII/Thạc sĩ/CKI</div></div>
        <div class="kpi-card"><div class="kpi-title">📚 CME ≥12 tiết</div><div class="kpi-value">${trainingRate}%</div><div class="kpi-compare">${trainedCount}/${total} đạt chuẩn</div></div>
        <div class="kpi-card"><div class="kpi-title">🏢 Số khoa/phòng</div><div class="kpi-value">${new Set(allStaff.map(s => s.khoa)).size}</div><div class="kpi-compare">Khối chuyên môn & HC</div></div>
    `;

    let soGiuongHienTai = tongGiuong;
    let soBsHienTai = totalBacSi;
    let soDdHienTai = totalDieuDuong;
    let soDsHienTai = allStaff.filter(s => s.chucdanh === "Dược sĩ").length;
    let tenKhoaHienTai = "TOÀN BỆNH VIỆN";
    
    if (currentDeptFilter !== "all") {
        const khoaDuocChon = currentDeptFilter;
        tenKhoaHienTai = `KHOA ${khoaDuocChon.toUpperCase()}`;
        soGiuongHienTai = soGiuong[khoaDuocChon] || 0;
        soBsHienTai = allStaff.filter(s => s.khoa === khoaDuocChon && s.chucdanh === "Bác sĩ").length;
        soDdHienTai = allStaff.filter(s => s.khoa === khoaDuocChon && s.chucdanh === "Điều dưỡng").length;
        soDsHienTai = allStaff.filter(s => s.khoa === khoaDuocChon && s.chucdanh === "Dược sĩ").length;
    }
    
    document.getElementById('toanVienTitle').innerHTML = `📊 ${tenKhoaHienTai} <span class="badge-ratio">${soGiuongHienTai} giường</span>`;
    
    const bsToanVien = soGiuongHienTai > 0 ? soBsHienTai / soGiuongHienTai : 0;
    const ddToanVien = soGiuongHienTai > 0 ? soDdHienTai / soGiuongHienTai : 0;
    const bsDdToanVien = soDdHienTai > 0 ? soBsHienTai / soDdHienTai : 0;
    const dsToanVien = soGiuongHienTai > 0 ? soDsHienTai / soGiuongHienTai : 0;
    
    document.getElementById('bsGiuanToanVienSo').innerHTML = `${soBsHienTai} BS / ${soGiuongHienTai} giường`;
    document.getElementById('bsGiuanToanVien').innerHTML = `<strong>${bsToanVien.toFixed(3)}</strong>`;
    document.getElementById('ddGiuanToanVienSo').innerHTML = `${soDdHienTai} ĐD / ${soGiuongHienTai} giường`;
    document.getElementById('ddGiuanToanVien').innerHTML = `<strong>${ddToanVien.toFixed(3)}</strong>`;
    document.getElementById('bsDdToanVienSo').innerHTML = `${soBsHienTai} BS / ${soDdHienTai} ĐD`;
    document.getElementById('bsDdToanVien').innerHTML = `<strong>${bsDdToanVien.toFixed(2)}</strong>`;
    document.getElementById('dsGiuanToanVienSo').innerHTML = `${soDsHienTai} DS / ${soGiuongHienTai} giường`;
    document.getElementById('dsGiuanToanVien').innerHTML = `<strong>${dsToanVien.toFixed(3)}</strong>`;

    const khoaLamSang = ["Nội", "Ngoại", "Lão", "Châm cứu", "PHCN"];
    let bsKhoaHtml = "";
    let ddKhoaHtml = "";
    
    khoaLamSang.forEach(khoa => {
        const soBs = allStaff.filter(s => s.khoa === khoa && s.chucdanh === "Bác sĩ").length;
        const soDd = allStaff.filter(s => s.khoa === khoa && s.chucdanh === "Điều dưỡng").length;
        const giuong = soGiuong[khoa] || 1;
        const tyLeBs = (soBs / giuong).toFixed(3);
        const tyLeDd = (soDd / giuong).toFixed(3);
        bsKhoaHtml += `<tr><td style="text-align:left">${khoa}</td><td style="text-align:center">${soBs} BS / ${giuong} giường</td><td style="text-align:right" class="highlight">${tyLeBs}</td></tr>`;
        ddKhoaHtml += `<tr><td style="text-align:left">${khoa}</td><td style="text-align:center">${soDd} ĐD / ${giuong} giường</td><td style="text-align:right" class="highlight">${tyLeDd}</td></tr>`;
    });
    
    document.getElementById('bsGiuanKhoaBody').innerHTML = bsKhoaHtml;
    document.getElementById('ddGiuanKhoaBody').innerHTML = ddKhoaHtml;

    const tbody = document.getElementById('staffTableBody');
    if (tbody) {
        let tableRows = '';
        for (let idx = 0; idx < filteredStaff.length; idx++) {
            const s = filteredStaff[idx];
            const showWarning = (s.isYTe && !s.hasCCHN);
            let gphnDisplay = '';
            if (showWarning) {
                gphnDisplay = `<span class="badge-missing">⚠️ Thiếu GPHN</span>`;
            } else if (s.hasCCHN) {
                gphnDisplay = `<span class="badge-cchn yes">${s.cchn}</span>`;
            } else {
                gphnDisplay = `<span class="badge-cchn no">—</span>`;
            }
            tableRows += `
            <tr onclick="showHistory('${s.cccd}')">
                <td style="text-align:center">${idx+1}</td>
                <td style="text-align:left">${s.name}</td>
                <td style="text-align:center">${s.cccd}</td>
                <td style="text-align:center">${s.khoa}</td>
                <td style="text-align:center">${s.chucvu}</td>
                <td style="text-align:center">${s.chucdanh}</td>
                <td style="text-align:center">${s.trinhdo}</td>
                <td style="text-align:center">${gphnDisplay}</td>
                <td style="text-align:center">${s.noiHanhNgheCuoi}</td>
                <td style="text-align:center"><span class="badge-cchn ${s.cme ? 'yes' : 'no'}">${s.cme ? '✓' : '✗'}</span></td>
                <td style="text-align:center"><i class="fas fa-history view-history" onclick="event.stopPropagation(); showHistory('${s.cccd}')"></i></td>
            </tr>`;
        }
        tbody.innerHTML = tableRows;
    }
    
    const missingCCHNCount = filteredStaff.filter(s => s.isYTe && !s.hasCCHN).length;
    document.getElementById('totalStaffInfo').innerHTML = `
        <span>📋 Hiển thị ${filteredStaff.length} / ${total} nhân sự</span>
        <span>⚠️ NV y tế thiếu GPHN: ${missingCCHNCount}</span>
        <span>🎯 Mục tiêu CME: ≥70% (Hiện: ${trainingRate}%)</span>
    `;

    updateDeptChart(allStaff);
    updateSummaryPieCharts(allStaff);

    // Cập nhật các danh sách filter động
    updateDropdowns(allStaff, total);
}

function updateDropdowns(allStaff, total) {
    const filters = [
        { id: 'deptFilter', prop: 'khoa', label: 'Tất cả khoa' },
        { id: 'chucvuFilter', prop: 'chucvu', label: 'Tất cả chức vụ' },
        { id: 'chucdanhFilter', prop: 'chucdanh', label: 'Tất cả chức danh' },
        { id: 'noiHanhNgheFilter', prop: 'noiHanhNgheCuoi', label: 'Tất cả nơi hành nghề' }
    ];

    filters.forEach(f => {
        const select = document.getElementById(f.id);
        const currentVal = select.value;
        const countMap = {};
        allStaff.forEach(s => { countMap[s[f.prop]] = (countMap[s[f.prop]] || 0) + 1; });
        
        select.innerHTML = `<option value="all">${f.label} (${total})</option>` + 
            Object.keys(countMap).sort().map(val => `<option value="${val}">${val} (${countMap[val]})</option>`).join('');
        
        if ([...select.options].some(opt => opt.value === currentVal)) select.value = currentVal;
    });
}

function updateDeptChart(allStaff) {
    const deptMap = new Map();
    // Danh sách khoa cố định để biểu đồ luôn hiển thị đúng thứ tự
    const khoaChinh = ["Nội", "Ngoại", "Lão", "Châm cứu", "PHCN", "Dược", "KB&XN-CĐHA", "TC-HC&TC-KT", "KHTH-ĐD"];
    
    // Khởi tạo dữ liệu trống cho từng khoa
    khoaChinh.forEach(k => {
        deptMap.set(k, { bacSi: 0, ySi: 0, dieuDuong: 0, kyThuat: 0, duocSi: 0, nhanVien: 0 });
    });
    
    // Tổng hợp dữ liệu từ danh sách nhân viên
    allStaff.forEach(s => {
        if (!deptMap.has(s.khoa)) {
            deptMap.set(s.khoa, { bacSi: 0, ySi: 0, dieuDuong: 0, kyThuat: 0, duocSi: 0, nhanVien: 0 });
        }
        const stat = deptMap.get(s.khoa);
        if (s.chucdanh === "Bác sĩ") stat.bacSi++;
        else if (s.chucdanh === "Y sĩ") stat.ySi++;
        else if (s.chucdanh === "Điều dưỡng") stat.dieuDuong++;
        else if (s.chucdanh === "Kỹ thuật viên") stat.kyThuat++;
        else if (s.chucdanh === "Dược sĩ") stat.duocSi++;
        else stat.nhanVien++; // Hành chính, hỗ trợ...
    });

    const depts = Array.from(deptMap.keys());

    // Cấu hình các cột chồng (Datasets)
    const datasets = [
        { label: 'Bác sĩ', key: 'bacSi', color: '#2dd4bf' },
        { label: 'Y sĩ', key: 'ySi', color: '#06b6d4' },
        { label: 'Điều dưỡng', key: 'dieuDuong', color: '#facc15' },
        { label: 'KTV', key: 'kyThuat', color: '#a78bfa' },
        { label: 'Dược sĩ', key: 'duocSi', color: '#fb7185' },
        { label: 'Nhân viên', key: 'nhanVien', color: '#34d399' }
    ].map(ds => ({
        label: ds.label,
        data: depts.map(d => deptMap.get(d)[ds.key]),
        backgroundColor: ds.color,
        borderRadius: 4,
        barPercentage: 0.7,
        categoryPercentage: 0.85
    }));

    // Plugin tùy chỉnh để vẽ số tổng lên đầu cột chồng
    const chartDataLabels = {
        id: 'chartDataLabels',
        afterDatasetsDraw(chart) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = 'bold 10px Inter';
            ctx.fillStyle = '#facc15';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            // Lấy thông tin về vị trí các cột từ dataset cuối cùng
            const meta = chart.getDatasetMeta(data.datasets.length - 1);
            
            meta.data.forEach((bar, index) => {
                // Tính tổng của tất cả các dataset tại vị trí cột này
                let total = 0;
                data.datasets.forEach(dataset => {
                    total += dataset.data[index];
                });

                if (total > 0) {
                    // Tìm tọa độ Y cao nhất (thấp nhất về giá trị pixel) của cột chồng
                    let highestY = bar.y;
                    for (let i = 0; i < data.datasets.length; i++) {
                        const m = chart.getDatasetMeta(i);
                        if (m.data[index] && m.data[index].y < highestY) {
                            highestY = m.data[index].y;
                        }
                    }
                    // Vẽ số tổng lên trên đầu cột 5px
                    ctx.fillText(total, bar.x, highestY - 5);
                }
            });
            ctx.restore();
        }
    };

    const ctx = document.getElementById('deptChart').getContext('2d');
    if (deptChart) deptChart.destroy(); // Hủy biểu đồ cũ nếu tồn tại
    
    deptChart = new Chart(ctx, {
        type: 'bar',
        data: { labels: depts, datasets: datasets },
        plugins: [chartDataLabels], // Đăng ký plugin vẽ số tổng
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: { 
                legend: { display: false }, // Ẩn legend mặc định vì đã có HTML legend
                tooltip: {
                    backgroundColor: 'rgba(10, 20, 30, 0.9)',
                    titleColor: '#2dd4bf',
                    borderColor: '#2a3a4a',
                    borderWidth: 1,
                    padding: 10,
                    bodySpacing: 4
                }
            },
            scales: { 
                x: { 
                    stacked: true, 
                    ticks: { color: '#8aabba', font: { size: 8 }, rotation: 40 },
                    grid: { display: false } 
                }, 
                y: { 
                    stacked: true, 
                    beginAtZero: true,
                    ticks: { color: '#8aabba', font: { size: 8 }, stepSize: 5 },
                    grid: { color: 'rgba(42, 58, 74, 0.5)' } 
                } 
            }
        }
    });

    // Cập nhật chú thích (Legend) phía dưới biểu đồ
    document.getElementById('chartLegend').innerHTML = [
        { label: 'Bác sĩ', color: '#2dd4bf' },
        { label: 'Y sĩ', color: '#06b6d4' },
        { label: 'Điều dưỡng', color: '#facc15' },
        { label: 'KTV', color: '#a78bfa' },
        { label: 'Dược sĩ', color: '#fb7185' },
        { label: 'Nhân viên', color: '#34d399' }
    ].map(item => `
        <span><span class="legend-color" style="background:${item.color};"></span><span class="legend-text">${item.label}</span></span>
    `).join('');
}

function showHistory(cccd) {
    const staff = staffMap.get(cccd);
    if (!staff) return;
    document.getElementById('modalTitle').innerHTML = `<i class="fas fa-history"></i> Lịch sử đào tạo - ${staff.name} (${staff.cccd})`;
    document.getElementById('modalBody').innerHTML = `
        <div class="history-item"><div class="history-year">📅 Năm 2024</div><div>CME ≥12 tiết: <span class="history-status ${staff.cme2024 ? 'dat' : 'chua'}">${staff.cme2024 ? '✓ Đạt' : '✗ Chưa đạt'}</span></div></div>
        <div class="history-item"><div class="history-year">📅 Năm 2025</div><div>CME ≥12 tiết: <span class="history-status ${staff.cme2025 ? 'dat' : 'chua'}">${staff.cme2025 ? '✓ Đạt' : '✗ Chưa đạt'}</span></div></div>
        <div class="history-item"><div class="history-year">📅 Năm 2026</div><div>CME ≥12 tiết: <span class="history-status ${staff.cme2026 ? 'dat' : 'chua'}">${staff.cme2026 ? '✓ Đạt' : '✗ Chưa đạt'}</span></div></div>
        <div class="history-item"><div class="history-year">📜 Giấy phép hành nghề</div><div>Số GPHN: ${staff.cchn || 'Chưa có'}<br>Phạm vi chuyên môn: ${staff.phamVi || 'Chưa phân loại'}</div></div>
        <div class="history-item"><div class="history-year">🏥 Thông tin khác</div><div>CCCD: ${staff.cccd}<br>Khoa: ${staff.khoa}<br>Chức vụ: ${staff.chucvu}<br>Chức danh: ${staff.chucdanh}<br>Trình độ: ${staff.trinhdo}</div></div>
    `;
    document.getElementById('historyModal').style.display = 'flex';
}

function closeModal() { document.getElementById('historyModal').style.display = 'none'; }

// Cập nhật hàm Export chính xác với các bộ lọc hiện tại
function exportToExcel() {
    const allStaff = getStaffForYear(currentYear);
    
    // Áp dụng bộ lọc y hệt như trên bảng hiển thị
    let exportStaff = allStaff.filter(s => {
        const matchLoaiHinh = currentLoaiHinhFilter === "all" || 
                             (currentLoaiHinhFilter === "yte" ? s.isYTe : !s.isYTe);
        const matchDept = currentDeptFilter === "all" || s.khoa === currentDeptFilter;
        const matchChucvu = currentChucvuFilter === "all" || s.chucvu === currentChucvuFilter;
        const matchChucdanh = currentChucdanhFilter === "all" || s.chucdanh === currentChucdanhFilter;
        const matchNoi = currentNoiHanhNgheFilter === "all" || s.noiHanhNgheCuoi === currentNoiHanhNgheFilter;
        const matchSearch = currentSearch === "" || 
                           s.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                           s.cccd.includes(currentSearch) ||
                           (s.cchn && s.cchn.toLowerCase().includes(currentSearch.toLowerCase()));
        
        return matchLoaiHinh && matchDept && matchChucvu && matchChucdanh && matchNoi && matchSearch;
    });

    const headers = ["STT", "Ho ten", "CCCD", "Khoa/Phong", "Chuc vu", "Chuc danh", "Trinh do", "So GPHN", "Noi hanh nghe", `CME ${currentYear}`];
    
    // Tạo nội dung CSV
    let csvContent = "\uFEFF"; // Ký tự BOM để Excel đọc được Tiếng Việt UTF-8
    csvContent += headers.join(",") + "\n";
    
    exportStaff.forEach((s, idx) => {
        const row = [
            idx + 1,
            s.name,
            `'${s.cccd}`, // Thêm dấu nháy đơn để Excel không biến số CCCD thành số khoa học
            s.khoa,
            s.chucvu,
            s.chucdanh,
            s.trinhdo,
            s.cchn || "",
            s.noiHanhNgheCuoi,
            s.cme ? "Dat" : "Chua dat"
        ];
        csvContent += row.map(cell => `"${cell}"`).join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Danh_sach_nhan_su_loc_${currentYear}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Event Listeners
document.getElementById('yearSelect').addEventListener('change', (e) => { currentYear = parseInt(e.target.value); updateDashboard(); });
document.getElementById('loaiHinhFilter').addEventListener('change', (e) => { currentLoaiHinhFilter = e.target.value; updateDashboard(); });
document.getElementById('deptFilter').addEventListener('change', (e) => { currentDeptFilter = e.target.value; updateDashboard(); });
document.getElementById('chucvuFilter').addEventListener('change', (e) => { currentChucvuFilter = e.target.value; updateDashboard(); });
document.getElementById('chucdanhFilter').addEventListener('change', (e) => { currentChucdanhFilter = e.target.value; updateDashboard(); });
document.getElementById('noiHanhNgheFilter').addEventListener('change', (e) => { currentNoiHanhNgheFilter = e.target.value; updateDashboard(); });
document.getElementById('searchInput').addEventListener('input', (e) => { currentSearch = e.target.value; updateDashboard(); });
document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
window.onclick = (e) => { if (e.target === document.getElementById('historyModal')) closeModal(); };

// Khởi chạy lần đầu
updateDashboard();