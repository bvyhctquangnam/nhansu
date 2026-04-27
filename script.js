// ==================== DỮ LIỆU NHÂN SỰ (GIỮ NGUYÊN) ====================
const staffData = [
    { cccd: "049069024466", name: "Ngô Ngọc Toàn", khoa: "Ban Giám đốc", chucvu: "Giám đốc", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "001844/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049082018694", name: "Nguyễn Hoàng Thạch", khoa: "Ban Giám đốc", chucvu: "Phó Giám đốc", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "001484/QNA-CCHN", ngayCap: "11/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "079201000107", name: "Phạm Ngọc Tuấn", khoa: "TC-HC&TC-KT", chucvu: "Trưởng phòng", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", ngayCap: "", phamVi: "", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000108", name: "Chế Thị Việt Hồng", khoa: "TC-HC&TC-KT", chucvu: "Phó phòng", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", ngayCap: "", phamVi: "", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000109", name: "Trương Thanh Tây", khoa: "TC-HC&TC-KT", chucvu: "Kế toán trưởng", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", ngayCap: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000110", name: "Nguyễn Thị Thu Thảo", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", phamVi: "", isYTe: false, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000111", name: "Lê Thị Bộ", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", phamVi: "", isYTe: false, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "" },
    { cccd: "079201000112", name: "Nguyễn Thị Mỹ Liên", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", phamVi: "", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000113", name: "Phạm Thị Kim Sen", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000114", name: "Nguyễn Thị Trương Trà", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000115", name: "Nguyễn Thị Thu Ánh", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", phamVi: "Hành chính", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000116", name: "Huỳnh Thị Nga", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000117", name: "La Thị Lương", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Kế toán", trinhdo: "Đại học", cchn: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000118", name: "Nguyễn Hương Ân", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Bảo vệ", trinhdo: "", cchn: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000119", name: "Nguyễn Nhật Phương", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Bảo vệ", trinhdo: "", cchn: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000120", name: "Nguyễn Sau", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Bảo vệ", trinhdo: "", cchn: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000121", name: "Nguyễn Minh Phúc", khoa: "TC-HC&TC-KT", chucvu: "Nhân viên", chucdanh: "Thợ điện", trinhdo: "", cchn: "", phamVi: "", isYTe: false, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "046091004004", name: "Nguyễn Văn Dũng", khoa: "KHTH-ĐD", chucvu: "Trưởng phòng", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "005756/QNA-CCHN", ngayCap: "10/02/2017", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049077019096", name: "Dương Hồng Thuận", khoa: "KHTH-ĐD", chucvu: "Phó phòng", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "", ngayCap: "", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049186016647", name: "Nguyễn Thị Ánh Quang", khoa: "KHTH-ĐD", chucvu: "Phó phòng", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "0016498/BYT-CCHN", ngayCap: "18/02/2014", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049174001097", name: "Đỗ Thị Minh Tâm", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "003691/QNA-CCHN", ngayCap: "25/09/2014", phamVi: "Đa khoa", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049192005847", name: "Trương Thị Vân", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "004357/QNA-CCHN", ngayCap: "16/12/2015", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000118", name: "Bùi Thị Ánh Nguyệt", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "CNTT", trinhdo: "Cao đẳng", cchn: "", ngayCap: "", phamVi: "", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "079201000121", name: "Võ Thị Kim Tuyết", khoa: "KHTH-ĐD", chucvu: "Nhân viên", chucdanh: "Hộ lý", trinhdo: "", cchn: "", ngayCap: "", phamVi: "", isYTe: false, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "049182009239", name: "Huỳnh Thị Đan Hạ", khoa: "KB&XN-CĐHA", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "002928/QNA-CCHN", ngayCap: "12/03/2014", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "034177013508", name: "Bùi Thị Thanh Vân", khoa: "KB&XN-CĐHA", chucvu: "ĐD trưởng khoa", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "001800/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049192001602", name: "Võ Thị Ngọc Huệ", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "007562/QNA-CCHN", ngayCap: "29/07/2019", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049185008134", name: "Thi Thị Tuyết Trinh", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001806/QNA-CCHN", ngayCap: "22/02/2021", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049180009634", name: "Lê Thị Hường", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "030102/BYT-CCHN", ngayCap: "28/07/2016", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "KB&XN-CĐHA" },       
    { cccd: "049185028282", name: "Võ Thị Oanh Thu", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001758/QNA-CCHN", ngayCap: "20/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },    
    { cccd: "049183011777", name: "Châu Thị Phương Nga", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001815/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049081013296", name: "Võ Trung Phong", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Đại học", cchn: "000812/QNA-CCHN", ngayCap: "29/05/2013", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049187008450", name: "Nguyễn Thị Kim Vân", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Đại học", cchn: "001688/QNA-CCHN", ngayCap: "20/12/2013", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049189003791", name: "Nguyễn Thị Ngọc Nga", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Đại học", cchn: "001843/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "051174013490", name: "Phan Thị Lệ Nhi", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cao đẳng", cchn: "001828/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Xét nghiệm", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049091010430", name: "Nguyễn Trần Huỳnh Tâm", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cao đẳng", cchn: "005269/QNA-CCHN", ngayCap: "02/03/2016", phamVi: "CĐHA", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "049083012266", name: "Đinh Công Minh", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Đại học", cchn: "000413/QNA-CCHN", ngayCap: "22/08/2012", phamVi: "CĐHA", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "KB&XN-CĐHA" },
    { cccd: "079201000106", name: "Châu Thị Nhị", khoa: "KB&XN-CĐHA", chucvu: "Nhân viên", chucdanh: "Hộ lý", trinhdo: "", cchn: "", phamVi: "", isYTe: false, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "049067014408", name: "Phạm Khắc Kim Thành", khoa: "Nội", chucvu: "Phụ trách khoa", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "001833/QNA-CCHN", ngayCap: "", phamVi: "YHCT", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049179012072", name: "Nguyễn Thị Kim", khoa: "Nội", chucvu: "ĐD trưởng khoa", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "001787/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049182013590", name: "Lâm Thị Phương", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "006659/QNA-CCHN", ngayCap: "22/01/2018", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049197009085", name: "Trần Lê Thiên Phúc", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "000389/QNA-GPHN", ngayCap: "16/09/2024", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049200002915", name: "Huỳnh Ngọc Châu", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001064/ĐNA-GPHN", ngayCap: "31/10/2025", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049183004529", name: "Võ Thị Thu Thủy", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "001787/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049196005674", name: "Bùi Thị Thúy Vân", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "007130/QNA-CCHN", ngayCap: "10/10/2018", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049184003633", name: "Nguyễn Hoài Phương", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001831/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049187015212", name: "Lê Thị Minh", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001785/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049187000581", name: "Nguyễn Thị Thu Ngân", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001783/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049186013415", name: "Nguyễn Thị Phương", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001804/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Nội" },    
    { cccd: "040173028267", name: "Hoàng Thị Hồng", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001841/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049172012803", name: "Bùi Thị Khiêm", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "005345/QNA-CCHN", ngayCap: "25/02/2016", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "049174010398", name: "Phạm Thị Thu Vân", khoa: "Nội", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001793/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Nội" },
    { cccd: "040091034560", name: "Nguyễn Quang Ngọc", khoa: "Ngoại", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "005757/QNA-CCHN", ngayCap: "10/02/2017", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },    
    { cccd: "049180016398", name: "Trần Thị Ánh Tuyết", khoa: "Ngoại", chucvu: "ĐD trưởng khoa", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "001836/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "049187015014", name: "Nguyễn Thị Hiệp", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001822/QNA-CCHN", ngayCap: "31/10/2023", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "049074014630", name: "Trương Văn Thảo", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001827/QNA-CCHN", ngayCap: "29/08/2022", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "049178018026", name: "Trương Thị Cẩm Vân", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001830/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "025172008047", name: "Nguyễn Thị Minh Phượng", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001802/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "042184017987", name: "Đặng Thị Văn", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001838/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "027175008504", name: "Nguyễn Thị Thu Hương", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001842/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Ngoại" },
    { cccd: "079201000106", name: "Lê Thị Bích Thủy", khoa: "Ngoại", chucvu: "Nhân viên", chucdanh: "Hộ lý", trinhdo: "", cchn: "", phamVi: "", isYTe: false, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "" },
    { cccd: "049086011692", name: "Trương Văn Tú", khoa: "Lão", chucvu: "Phó khoa", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001786/QNA-CCHN", ngayCap: "22/02/2021", phamVi: "YHCT", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049189006604", name: "Phạm Thị Nhân", khoa: "Lão", chucvu: "ĐD trưởng khoa", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "006252/QNA-CCHN", ngayCap: "18/08/2017", ngayCap: "", phamVi: "Đa khoa", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049074003681", name: "Võ Tấn Đệ", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "005271/QNA-CCHN", ngayCap: "02/03/2016", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Lão" },
    { cccd: "049192005276", name: "Ung Thu Hiền", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "006833/QNA-CCHN", ngayCap: "26/04/2018", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049197011681", name: "Châu Trinh Thương", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "000388/QNA-GPHN", ngayCap: "16/09/2024", phamVi: "YHCT", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049300003664", name: "Võ Thị Thùy Linh", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001656/ĐNA-GPHN", ngayCap: "13/03/2026", phamVi: "YHCT", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049176008379", name: "Nguyễn Thị Cúc", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "001849/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Lão" },   
    { cccd: "049188018723", name: "Lưu Thị Kim Xuyến", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "005268/QNA-CCHN", ngayCap: "02/03/2016", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Lão" },
    { cccd: "049177006950", name: "Trần Thị Thu Sương", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001799/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049187010593", name: "Nguyễn Thị Thu Triều", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001825/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049078025657", name: "Trương Văn Hoàng", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001808/QNA-CCHN", ngayCap: "10/09/2018", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Lão" },
    { cccd: "049182002925", name: "Lê Thị Lệ Thi", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001805/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049178012706", name: "Trần Thị Lợi", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001792/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049195003986", name: "Nguyễn Thị Sen", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001792/QNA-CCHN", ngayCap: "01/10/2018", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049189004116", name: "Huỳnh Thị Yến Nhi", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "000452/QNA-GPHN", ngayCap: "18/11/2024", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "049189002968", name: "Võ Thị Kim Tâm", khoa: "Lão", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cao đẳng", cchn: "001818/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Lão" },
    { cccd: "001193042772", name: "Trịnh Kiều Anh", khoa: "Châm cứu", chucvu: "Phụ trách khoa", chucdanh: "Bác sĩ", trinhdo: "Thạc sĩ", cchn: "007307/QNA-CCHN", ngayCap: "25/03/2019", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049188008470", name: "Nguyễn Thị Hồng Phước", khoa: "Châm cứu", chucvu: "ĐD trưởng khoa", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "0016506/BYT-CCHN", ngayCap: "18/02/2014", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049183013407", name: "Nguyễn Thị Thu Trang", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "001812/QNA-CCHN", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049194002505", name: "Nguyễn Thị Thuyền", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "008517/QNA-CCHN", ngayCap: "22/02/2021", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "042177006242", name: "La Thị Lam", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "001790/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Điều dưỡng", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "035174007889", name: "Nguyễn Thị Thủy", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "001814/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049184017394", name: "Trần Thị Lý", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001809/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049190016242", name: "Huỳnh Thị Bình", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001784/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049191007393", name: "Nguyễn Thị Miên", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001850/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "052191018327", name: "Nguyễn Thị Bích Nga", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001794/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Điều dưỡng", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049066011954", name: "Trần Văn Dung", khoa: "Châm cứu", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Trung cấp", cchn: "001821/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Châm cứu" },
    { cccd: "049090021695", name: "Trần Thanh Dương", khoa: "PHCN", chucvu: "Trưởng khoa", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "006039/ĐNA-CCHN", ngayCap: "20/05/2016", phamVi: "YHCT, PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049180011426", name: "Nguyễn Thị Sâm", khoa: "PHCN", chucvu: "KTV trưởng khoa", chucdanh: "Kỹ thuật viên", trinhdo: "Đại học", cchn: "001817/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049193012073", name: "Huỳnh Lục Ánh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Chuyên khoa I", cchn: "007311/QNA-CCHN", ngayCap: "25/03/2019", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049183007000", name: "Huỳnh Thị Sang", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Bác sĩ", trinhdo: "Bác sĩ", cchn: "001834/QNA-CCHN", ngayCap: "31/05/2023", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049068018824", name: "Hồ Hoàng Minh Quang", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Đại học", cchn: "001851/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "Đa khoa", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049186010526", name: "Nguyễn Thị Hoàng Trinh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001057/QNA-CCHN", ngayCap: "18/10/2013", phamVi: "Đa khoa", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049180017194", name: "Ngô Thị Xinh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001798/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049182009077", name: "Huỳnh Thị Mỹ Hạnh", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001826/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049185018755", name: "Trương Thị Diệu Yến", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Điều dưỡng", trinhdo: "Cao đẳng", cchn: "001810/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049172011880", name: "Phạm Thị Kim Thảo", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "001837/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049190016585", name: "Nguyễn Thị Như Thảo", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "003204/QNA-CCHN", ngayCap: "10/04/2014", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "066092023423", name: "Nguyễn Tấn Thiên", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Y sĩ", trinhdo: "Trung cấp", cchn: "005529/QNA-CCHN", ngayCap: "28/12/2016", phamVi: "YHCT", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049182017478", name: "Phan Trần Văn Châu", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cao đẳng", cchn: "001820/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "PHCN" },    
    { cccd: "049189001649", name: "Huỳnh Thị Thu Thủy", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cao đẳng", cchn: "005272/QNA-CCHN", ngayCap: "02/03/2016", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "PHCN" },
    { cccd: "049183013187", name: "Mai Thị Phương Thảo", khoa: "PHCN", chucvu: "Nhân viên", chucdanh: "Kỹ thuật viên", trinhdo: "Cao đẳng", cchn: "001819/QNA-CCHN", ngayCap: "24/12/2013", phamVi: "PHCN", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "PHCN" },
    { cccd: "034175012559", name: "Nguyễn Thị Sáu", khoa: "Dược", chucvu: "Trưởng khoa", chucdanh: "Dược sĩ", trinhdo: "Thạc sĩ", cchn: "1905/CCHN-D-SYT-QNA", ngayCap: "16/09/2019", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049173007188", name: "Trần Thị Thu Duyên", khoa: "Dược", chucvu: "Phó khoa", chucdanh: "Dược sĩ", trinhdo: "Chuyên khoa I", cchn: "1299/CCHN-D-SYT-QNA", ngayCap: "21/08/2017", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049179017846", name: "Hoàng Vũ Gia Ly", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Chuyên khoa I", cchn: "668/QNA-CCHND", ngayCap: "15/08/2014", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049088015259", name: "Bùi Hà Nam", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Đại học", cchn: "3190/CCHN-D-SYT-QNA", ngayCap: "24/07/2023", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049187010491", name: "Huỳnh Thị Kim Minh", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Đại học", cchn: "3195/CCHN-D-SYT-QNA", ngayCap: "04/08/2023", phamVi: "Dược", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },    
    { cccd: "049179014453", name: "Phạm Thị Lan", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3347/CCHN-D-SYT-QNA", ngayCap: "27/03/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049178010199", name: "Nguyễn Thị Thu Vinh", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3341/CCHN-D-SYT-QNA", ngayCap: "13/03/2024", phamVi: "PHCN", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049175016777", name: "Nguyễn Thị Thanh Thuận", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3342/CCHN-D-SYT-QNA", ngayCap: "13/03/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: false, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "046185015790", name: "Lê Thị Ánh Sáng", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3343/CCHN-D-SYT-QNA", ngayCap: "27/03/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049185014832", name: "Trương Thị Huyền Long", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3346/CCHN-D-SYT-QNA", ngayCap: "27/03/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Dược" },
    { cccd: "049181009328", name: "Nguyễn Thị Thùy Trang", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3350/CCHN-D-SYT-QNA", ngayCap: "27/03/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Dược" },
    { cccd: "030184026394", name: "Phan Thị Phương", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3348/CCHN-D-SYT-QNA", ngayCap: "27/03/2024", phamVi: "Dược", isYTe: true, cme2024: false, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "031176018031", name: "Ngô Thị Hòa", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3349/CCHN-D-SYT-QNA", ngayCap: "27/03/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Dược" },        
    { cccd: "049181008109", name: "Đào Nguyễn Hà Yên", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3344/CCHN-D-SYT-QNA", ngayCap: "27/03/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049183007691", name: "Lê Thị Thu Nga", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3345/CCHN-D-SYT-QNA", ngayCap: "27/03/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049175009744", name: "Trịnh Thị Bê", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "3470/CCHN-D-SYT-QNA", ngayCap: "10/09/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: true, noiHanhNgheCuoi: "Dược" },
    { cccd: "049067001646", name: "Nguyễn Ngọc Tuấn", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Cao đẳng", cchn: "77/CCHN-D-SYT-QNA", ngayCap: "22/04/2024", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Dược" },
    { cccd: "079201000012", name: "Đậu Xuân Vinh", khoa: "Dược", chucvu: "Nhân viên", chucdanh: "Dược sĩ", trinhdo: "Trung cấp", cchn: "", ngayCap: "", phamVi: "Dược", isYTe: true, cme2024: true, cme2025: true, cme2026: false, noiHanhNgheCuoi: "Dược" }
    
];

for (let i = 0; i < staffData.length; i++) staffData[i].hasCCHN = !!(staffData[i].cchn && staffData[i].cchn.length > 0);
const staffMap = new Map(); for (const s of staffData) staffMap.set(s.cccd, s);

// ==================== THỨ TỰ SẮP XẾP ====================
const priorityDepts = [
    "Ban Giám đốc", "TC-HC&TC-KT", "KHTH-ĐD", "KB&XN-CĐHA",
    "Nội", "Ngoại", "Lão", "Châm cứu", "PHCN", "Dược" 
];

function getStaffSortWeight(staff) {
    const khoa = staff.khoa;
    const cv = staff.chucvu;
    const td = staff.trinhdo;
    let roleRank = 99;
    if (khoa === "Ban Giám đốc") {
        if (cv === "Giám đốc") roleRank = 1;
        else if (cv === "Phó Giám đốc") roleRank = 2;
        else roleRank = 3;
    }
    else if (khoa === "TC-HC&TC-KT") {
        if (cv === "Trưởng phòng") roleRank = 1;
        else if (cv === "Phụ trách phòng") roleRank = 2;
	else if (cv === "Phó phòng") roleRank = 3;
        else if (cv === "Kế toán trưởng") roleRank = 4;
        else roleRank = 5;
    }
    else if (khoa === "KHTH-ĐD") {
        if (cv === "Trưởng phòng") roleRank = 1;
        else if (cv === "Phụ trách phòng") roleRank = 2;
	else if (cv === "Phó phòng") roleRank = 3;
        else roleRank = 4;
    }
    else if (["KB&XN-CĐHA", "Nội", "Ngoại", "Lão", "Châm cứu"].includes(khoa)) {
        if (cv === "Trưởng khoa") roleRank = 1;
        else if (cv === "Phụ trách khoa") roleRank = 2;
	else if (cv === "Phó khoa") roleRank = 3;
        else if (cv === "ĐD trưởng khoa") roleRank = 4;
        else roleRank = 10;
    }
    else if (khoa === "PHCN") {
        if (cv === "Trưởng khoa") roleRank = 1;
        else if (cv === "Phụ trách khoa") roleRank = 2;
	else if (cv === "Phó khoa") roleRank = 3;
        else if (cv === "KTV trưởng khoa") roleRank = 4;
        else roleRank = 10;
    }
    else if (khoa === "Dược") {
        if (cv === "Trưởng khoa") roleRank = 1;
        else if (cv === "Phụ trách khoa") roleRank = 2;
	else if (cv === "Phó khoa") roleRank = 3;
        else roleRank = 10;
    }
    // Trình độ ưu tiên trong cùng nhóm chức vụ
    const degreeRank = {
        "Tiến sĩ": 1, "Chuyên khoa II": 1,
        "Thạc sĩ": 2, "Chuyên khoa I": 2,        
        "Bác sĩ": 3,
        "Dược sĩ": 4,
        "Đại học": 5,
        "Cao đẳng": 6,
        "Trung cấp": 7,
        "Khác": 8
    };
    const deg = degreeRank[td] || 9;
    return roleRank * 100 + deg;
}

function sortStaffByPriority(staffArray) {
    const groups = new Map();
    for (const s of staffArray) {
        if (!groups.has(s.khoa)) groups.set(s.khoa, []);
        groups.get(s.khoa).push(s);
    }
    const sortedDepts = Array.from(groups.keys()).sort((a, b) => {
        let ia = priorityDepts.indexOf(a);
        let ib = priorityDepts.indexOf(b);
        if (ia === -1) ia = 999;
        if (ib === -1) ib = 999;
        return ia - ib;
    });
    const result = [];
    for (const dept of sortedDepts) {
        const members = groups.get(dept);
        members.sort((x, y) => getStaffSortWeight(x) - getStaffSortWeight(y));
        result.push(...members);
    }
    return result;
}

// ==================== CÁC BIẾN & HÀM CHÍNH ====================
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

function updateDashboard() {
    const allStaff = getStaffForYear(currentYear);
    let filteredStaff = [...allStaff];
    if (currentLoaiHinhFilter !== "all") {
        filteredStaff = filteredStaff.filter(s => currentLoaiHinhFilter === "yte" ? s.isYTe : !s.isYTe);
    }
    if (currentDeptFilter !== "all") filteredStaff = filteredStaff.filter(s => s.khoa === currentDeptFilter);
    if (currentChucvuFilter !== "all") filteredStaff = filteredStaff.filter(s => s.chucvu === currentChucvuFilter);
    if (currentChucdanhFilter !== "all") filteredStaff = filteredStaff.filter(s => s.chucdanh === currentChucdanhFilter);
    if (currentNoiHanhNgheFilter !== "all") filteredStaff = filteredStaff.filter(s => s.noiHanhNgheCuoi === currentNoiHanhNgheFilter);
    if (currentSearch.trim()) {
        const search = currentSearch.toLowerCase();
        filteredStaff = filteredStaff.filter(s => 
            s.name.toLowerCase().includes(search) || 
            s.khoa.toLowerCase().includes(search) ||
            (s.cchn && s.cchn.toLowerCase().includes(search)) ||
            s.cccd.includes(search)
        );
    }

    // Áp dụng sắp xếp theo thứ tự ưu tiên
    filteredStaff = sortStaffByPriority(filteredStaff);

    // Hiển thị trạng thái lọc
    const filterStatusDiv = document.getElementById('filterStatus');
    const filterTextSpan = document.getElementById('filterText');
    let filterConditions = [];
    if (currentLoaiHinhFilter !== "all") filterConditions.push(currentLoaiHinhFilter === "yte" ? "‍⚕️ Nhân viên y tế" : "📋 Hành chính");
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
    const totalNhanVienYTe = allStaff.filter(s => s.isYTe).length;
    const totalBacSi = allStaff.filter(s => s.chucdanh === "Bác sĩ").length;
    const totalYSi = allStaff.filter(s => s.chucdanh === "Y sĩ").length;
    const totalDieuDuong = allStaff.filter(s => s.chucdanh === "Điều dưỡng").length;
    const totalCCHN = allStaff.filter(s => s.hasCCHN && s.isYTe).length;
    const trainedCount = allStaff.filter(s => s.cme).length;
    const trainingRate = total ? (trainedCount / total * 100).toFixed(1) : 0;
    const sauDaiHoc = allStaff.filter(s => ["Thạc sĩ","Chuyên khoa II","Chuyên khoa I","Tiến sĩ"].includes(s.trinhdo)).length;
    document.getElementById('kpiGrid').innerHTML = `
        <div class="kpi-card"><div class="kpi-title">👥 Tổng nhân sự</div><div class="kpi-value">${total}</div><div class="kpi-compare">Toàn bệnh viện</div></div>
        <div class="kpi-card"><div class="kpi-title">🏥 Nhân viên y tế</div><div class="kpi-value">${totalNhanVienYTe}</div><div class="kpi-compare">Bác sĩ: ${totalBacSi} | Y sĩ: ${totalYSi} | ĐD: ${totalDieuDuong}</div></div>
        <div class="kpi-card"><div class="kpi-title">📜 Có GPHN</div><div class="kpi-value">${totalCCHN}</div><div class="kpi-compare">Tỷ lệ: ${totalNhanVienYTe ? (totalCCHN/totalNhanVienYTe*100).toFixed(1) : 0}% (trên Nhân viên y tế)</div></div>
        <div class="kpi-card"><div class="kpi-title">🎓 Trình độ sau đại học</div><div class="kpi-value">${sauDaiHoc}</div><div class="kpi-compare">Tiến sĩ/Chuyên khoa II/Thạc sĩ/Chuyên khoa I</div></div>
        <div class="kpi-card"><div class="kpi-title">📚 CME ≥12 tiết</div><div class="kpi-value">${trainingRate}%</div><div class="kpi-compare">${trainedCount}/${total} đạt chuẩn</div></div>
        <div class="kpi-card"><div class="kpi-title">🏢 Số khoa/phòng</div><div class="kpi-value">${new Set(allStaff.map(s => s.khoa)).size}</div><div class="kpi-compare">Chuyên môn & Hành chính</div></div>
    `;

    // Chỉ số theo giường (toàn viện hoặc theo khoa được chọn)
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
    document.getElementById('bsGiuanToanVien').innerHTML = `${bsToanVien.toFixed(3)}`;
    document.getElementById('ddGiuanToanVienSo').innerHTML = `${soDdHienTai} ĐD / ${soGiuongHienTai} giường`;
    document.getElementById('ddGiuanToanVien').innerHTML = `${ddToanVien.toFixed(3)}`;
    document.getElementById('bsDdToanVienSo').innerHTML = `${soBsHienTai} BS / ${soDdHienTai} ĐD`;
    document.getElementById('bsDdToanVien').innerHTML = `${bsDdToanVien.toFixed(2)}`;
    document.getElementById('dsGiuanToanVienSo').innerHTML = `${soDsHienTai} DS / ${soGiuongHienTai} giường`;
    document.getElementById('dsGiuanToanVien').innerHTML = `${dsToanVien.toFixed(3)}`;

    const khoaLamSang = ["Nội", "Ngoại", "Lão", "Châm cứu", "PHCN"];
    let bsKhoaHtml = "", ddKhoaHtml = "";
    for (const khoa of khoaLamSang) {
        const soBs = allStaff.filter(s => s.khoa === khoa && s.chucdanh === "Bác sĩ").length;
        const soDd = allStaff.filter(s => s.khoa === khoa && s.chucdanh === "Điều dưỡng").length;
        const giuong = soGiuong[khoa] || 1;
        const tyLeBs = (soBs / giuong).toFixed(3);
        const tyLeDd = (soDd / giuong).toFixed(3);
        bsKhoaHtml += `<tr><td style="text-align:left">${khoa}</td><td style="text-align:center">${soBs} BS / ${giuong} giường</td><td style="text-align:right" class="highlight">${tyLeBs}</td></tr>`;
        ddKhoaHtml += `<tr><td style="text-align:left">${khoa}</td><td style="text-align:center">${soDd} ĐD / ${giuong} giường</td><td style="text-align:right" class="highlight">${tyLeDd}</td></tr>`;
    }
    document.getElementById('bsGiuanKhoaBody').innerHTML = bsKhoaHtml;
    document.getElementById('ddGiuanKhoaBody').innerHTML = ddKhoaHtml;

    // Render bảng nhân sự
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
             \n`;
        }
        tbody.innerHTML = tableRows;
    }

    const missingCCHNCount = filteredStaff.filter(s => s.isYTe && !s.hasCCHN).length;
    document.getElementById('totalStaffInfo').innerHTML = `
        <span>📋 Hiển thị ${filteredStaff.length} / ${total} nhân sự</span>
        <span>⚠️ Nhân viên y tế thiếu GPHN: ${missingCCHNCount}</span>
        <span>🎯 Mục tiêu CME: ≥70% (Hiện: ${trainingRate}%)</span>
    `;

    updateDeptChart(allStaff);
    updateSummaryPieCharts(allStaff);
    updateDropdowns(allStaff, total);
}

function updateSummaryPieCharts(allStaff) {
    const total = allStaff.length;
    const yte = allStaff.filter(s => s.isYTe).length;
    const hc = total - yte;
    if (pieChart1) pieChart1.destroy();
    const ctx1 = document.getElementById('pieChart1').getContext('2d');
    pieChart1 = new Chart(ctx1, {
        type: 'doughnut',
        data: { labels: ['NV y tế', 'Hành chính'], datasets: [{ data: [yte, hc], backgroundColor: ['#2dd4bf', '#facc15'], cutout: '55%' }] },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw} (${((ctx.raw / total) * 100).toFixed(1)}%)` } } } }
    });
    document.getElementById('pie1Legend').innerHTML = `
        <span><span class="legend-dot" style="background:#2dd4bf;"></span> NV y tế: ${yte} (${((yte / total) * 100).toFixed(1)}%)</span>
        <span><span class="legend-dot" style="background:#facc15;"></span> Hành chính: ${hc} (${((hc / total) * 100).toFixed(1)}%)</span>
    `;

    const bs = allStaff.filter(s => s.chucdanh === "Bác sĩ" && s.isYTe).length;
    const ys = allStaff.filter(s => s.chucdanh === "Y sĩ" && s.isYTe).length;
    const dd = allStaff.filter(s => s.chucdanh === "Điều dưỡng" && s.isYTe).length;
    const ktv = allStaff.filter(s => s.chucdanh === "Kỹ thuật viên" && s.isYTe).length;
    const ds = allStaff.filter(s => s.chucdanh === "Dược sĩ" && s.isYTe).length;
    if (pieChart2) pieChart2.destroy();
    const ctx2 = document.getElementById('pieChart2').getContext('2d');
    pieChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: { labels: ['Bác sĩ', 'Y sĩ', 'Điều dưỡng', 'KTV', 'Dược sĩ'], datasets: [{ data: [bs, ys, dd, ktv, ds], backgroundColor: ['#2dd4bf', '#06b6d4', '#facc15', '#a78bfa', '#fb7185'], cutout: '55%' }] },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw} (${((ctx.raw / yte) * 100).toFixed(1)}%)` } } } }
    });
    document.getElementById('pie2Legend').innerHTML = `
        <span><span class="legend-dot" style="background:#2dd4bf;"></span> Bác sĩ: ${bs} (${yte ? ((bs / yte) * 100).toFixed(1) : 0}%)</span>
        <span><span class="legend-dot" style="background:#06b6d4;"></span> Y sĩ: ${ys} (${yte ? ((ys / yte) * 100).toFixed(1) : 0}%)</span>
        <span><span class="legend-dot" style="background:#facc15;"></span> Điều dưỡng: ${dd} (${yte ? ((dd / yte) * 100).toFixed(1) : 0}%)</span>
        <span><span class="legend-dot" style="background:#a78bfa;"></span> KTV: ${ktv} (${yte ? ((ktv / yte) * 100).toFixed(1) : 0}%)</span>
        <span><span class="legend-dot" style="background:#fb7185;"></span> Dược sĩ: ${ds} (${yte ? ((ds / yte) * 100).toFixed(1) : 0}%)</span>
    `;
}

function updateDeptChart(allStaff) {
    const deptMap = new Map();
    const khoaChinh = ["Nội", "Ngoại", "Lão", "Châm cứu", "PHCN", "Dược", "KB&XN-CĐHA", "TC-HC&TC-KT", "KHTH-ĐD"];
    khoaChinh.forEach(k => deptMap.set(k, { bacSi: 0, ySi: 0, dieuDuong: 0, kyThuat: 0, duocSi: 0, nhanVien: 0 }));
    allStaff.forEach(s => {
        if (!deptMap.has(s.khoa)) deptMap.set(s.khoa, { bacSi: 0, ySi: 0, dieuDuong: 0, kyThuat: 0, duocSi: 0, nhanVien: 0 });
        const stat = deptMap.get(s.khoa);
        if (s.chucdanh === "Bác sĩ") stat.bacSi++;
        else if (s.chucdanh === "Y sĩ") stat.ySi++;
        else if (s.chucdanh === "Điều dưỡng") stat.dieuDuong++;
        else if (s.chucdanh === "Kỹ thuật viên") stat.kyThuat++;
        else if (s.chucdanh === "Dược sĩ") stat.duocSi++;
        else stat.nhanVien++;
    });
    const depts = Array.from(deptMap.keys()).sort((a,b) => {
        let ia = priorityDepts.indexOf(a);
        let ib = priorityDepts.indexOf(b);
        if (ia === -1) ia = 999;
        if (ib === -1) ib = 999;
        return ia - ib;
    });
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
    const chartDataLabels = {
        id: 'chartDataLabels',
        afterDatasetsDraw(chart) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = 'bold 10px Inter';
            ctx.fillStyle = '#facc15';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            const meta = chart.getDatasetMeta(data.datasets.length - 1);
            meta.data.forEach((bar, index) => {
                let total = 0;
                data.datasets.forEach(dataset => { total += dataset.data[index]; });
                if (total > 0) {
                    let highestY = bar.y;
                    for (let i = 0; i < data.datasets.length; i++) {
                        const m = chart.getDatasetMeta(i);
                        if (m.data[index] && m.data[index].y < highestY) highestY = m.data[index].y;
                    }
                    ctx.fillText(total, bar.x, highestY - 5);
                }
            });
            ctx.restore();
        }
    };
    const ctx = document.getElementById('deptChart').getContext('2d');
    if (deptChart) deptChart.destroy();
    deptChart = new Chart(ctx, {
        type: 'bar',
        data: { labels: depts, datasets: datasets },
        plugins: [chartDataLabels],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(10,20,30,0.9)', titleColor: '#2dd4bf' } },
            scales: { x: { stacked: true, ticks: { color: '#8aabba', font: { size: 8 }, rotation: 40 }, grid: { display: false } }, y: { stacked: true, beginAtZero: true, ticks: { color: '#8aabba', font: { size: 8 } }, grid: { color: 'rgba(42,58,74,0.5)' } } }
        }
    });
    document.getElementById('chartLegend').innerHTML = datasets.map(d => `<span><span class="legend-color" style="background:${d.backgroundColor};"></span><span class="legend-text">${d.label}</span></span>`).join('');
}

function updateDropdowns(allStaff, total) {
    const depts = [...new Set(allStaff.map(s => s.khoa))].sort((a,b) => {
        let ia = priorityDepts.indexOf(a);
        let ib = priorityDepts.indexOf(b);
        if (ia === -1) ia = 999;
        if (ib === -1) ib = 999;
        return ia - ib;
    });
    const deptSelect = document.getElementById('deptFilter');
    deptSelect.innerHTML = `<option value="all">Tất cả khoa (${total})</option>` + depts.map(d => `<option value="${d}">${d} (${allStaff.filter(s => s.khoa === d).length})</option>`).join('');
    if (currentDeptFilter !== "all" && depts.includes(currentDeptFilter)) deptSelect.value = currentDeptFilter;

    const chucvus = [...new Set(allStaff.map(s => s.chucvu))].sort();
    const chucvuSelect = document.getElementById('chucvuFilter');
    chucvuSelect.innerHTML = `<option value="all">Tất cả chức vụ (${total})</option>` + chucvus.map(cv => `<option value="${cv}">${cv} (${allStaff.filter(s => s.chucvu === cv).length})</option>`).join('');
    if (currentChucvuFilter !== "all" && chucvus.includes(currentChucvuFilter)) chucvuSelect.value = currentChucvuFilter;

    const chucdanhs = [...new Set(allStaff.map(s => s.chucdanh))].sort();
    const chucdanhSelect = document.getElementById('chucdanhFilter');
    chucdanhSelect.innerHTML = `<option value="all">Tất cả chức danh (${total})</option>` + chucdanhs.map(cd => `<option value="${cd}">${cd} (${allStaff.filter(s => s.chucdanh === cd).length})</option>`).join('');
    if (currentChucdanhFilter !== "all" && chucdanhs.includes(currentChucdanhFilter)) chucdanhSelect.value = currentChucdanhFilter;

    const nois = [...new Set(allStaff.map(s => s.noiHanhNgheCuoi))].sort();
    const noiSelect = document.getElementById('noiHanhNgheFilter');
    noiSelect.innerHTML = `<option value="all">Tất cả nơi hành nghề (${total})</option>` + nois.map(n => `<option value="${n}">${n} (${allStaff.filter(s => s.noiHanhNgheCuoi === n).length})</option>`).join('');
    if (currentNoiHanhNgheFilter !== "all" && nois.includes(currentNoiHanhNgheFilter)) noiSelect.value = currentNoiHanhNgheFilter;
}

window.showHistory = (cccd) => {
    const staff = staffMap.get(cccd);
    if (!staff) return;
    document.getElementById('modalTitle').innerHTML = `<i class="fas fa-history"></i> Lịch sử đào tạo - ${staff.name} (${staff.cccd})`;
    document.getElementById('modalBody').innerHTML = `
        <div class="history-item"><div class="history-year">📅 Năm 2024</div><div>CME ≥12 tiết: <span class="history-status ${staff.cme2024 ? 'dat' : 'chua'}">${staff.cme2024 ? '✓ Đạt' : '✗ Chưa đạt'}</span></div></div>
        <div class="history-item"><div class="history-year">📅 Năm 2025</div><div>CME ≥12 tiết: <span class="history-status ${staff.cme2025 ? 'dat' : 'chua'}">${staff.cme2025 ? '✓ Đạt' : '✗ Chưa đạt'}</span></div></div>
        <div class="history-item"><div class="history-year">📅 Năm 2026</div><div>CME ≥12 tiết: <span class="history-status ${staff.cme2026 ? 'dat' : 'chua'}">${staff.cme2026 ? '✓ Đạt' : '✗ Chưa đạt'}</span></div></div>
        <div class="history-item"><div class="history-year">📜 Giấy phép hành nghề</div><div>Số GPHN: ${staff.cchn || 'Chưa có'}<br>Ngày cấp: ${staff.ngayCap || 'Chưa có'}<br>Phạm vi chuyên môn: ${staff.phamVi || 'Chưa phân loại'}</div></div>
        <div class="history-item"><div class="history-year">🏥 Thông tin khác</div><div>CCCD: ${staff.cccd}<br>Khoa: ${staff.khoa}<br>Chức vụ: ${staff.chucvu}<br>Chức danh: ${staff.chucdanh}<br>Trình độ: ${staff.trinhdo}</div></div>
    `;
    document.getElementById('historyModal').style.display = 'flex';
};

window.closeModal = () => { document.getElementById('historyModal').style.display = 'none'; };

function exportToExcel() {
    const allStaff = getStaffForYear(currentYear);
    let exportStaff = allStaff.filter(s => {
        const matchLoaiHinh = currentLoaiHinhFilter === "all" || (currentLoaiHinhFilter === "yte" ? s.isYTe : !s.isYTe);
        const matchDept = currentDeptFilter === "all" || s.khoa === currentDeptFilter;
        const matchChucvu = currentChucvuFilter === "all" || s.chucvu === currentChucvuFilter;
        const matchChucdanh = currentChucdanhFilter === "all" || s.chucdanh === currentChucdanhFilter;
        const matchNoi = currentNoiHanhNgheFilter === "all" || s.noiHanhNgheCuoi === currentNoiHanhNgheFilter;
        const matchSearch = currentSearch === "" || s.name.toLowerCase().includes(currentSearch.toLowerCase()) || s.cccd.includes(currentSearch) || (s.cchn && s.cchn.toLowerCase().includes(currentSearch.toLowerCase()));
        return matchLoaiHinh && matchDept && matchChucvu && matchChucdanh && matchNoi && matchSearch;
    });
    exportStaff = sortStaffByPriority(exportStaff);
    const headers = ["STT", "Ho ten", "CCCD", "Khoa/Phong", "Chuc vu", "Chuc danh", "Trinh do", "So GPHN", "Noi hanh nghe", `CME ${currentYear}`];
    let csvContent = "\uFEFF";
    csvContent += headers.join(",") + "\n";
    exportStaff.forEach((s, idx) => {
        const row = [idx+1, s.name, `'${s.cccd}`, s.khoa, s.chucvu, s.chucdanh, s.trinhdo, s.cchn || "", s.noiHanhNgheCuoi, s.cme ? "Dat" : "Chua dat"];
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

// Event listeners
document.getElementById('yearSelect').addEventListener('change', (e) => { currentYear = parseInt(e.target.value); updateDashboard(); });
document.getElementById('loaiHinhFilter').addEventListener('change', (e) => { currentLoaiHinhFilter = e.target.value; updateDashboard(); });
document.getElementById('deptFilter').addEventListener('change', (e) => { currentDeptFilter = e.target.value; updateDashboard(); });
document.getElementById('chucvuFilter').addEventListener('change', (e) => { currentChucvuFilter = e.target.value; updateDashboard(); });
document.getElementById('chucdanhFilter').addEventListener('change', (e) => { currentChucdanhFilter = e.target.value; updateDashboard(); });
document.getElementById('noiHanhNgheFilter').addEventListener('change', (e) => { currentNoiHanhNgheFilter = e.target.value; updateDashboard(); });
document.getElementById('searchInput').addEventListener('input', (e) => { currentSearch = e.target.value; updateDashboard(); });
document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
window.onclick = (e) => { if (e.target === document.getElementById('historyModal')) closeModal(); };

// ==================== HỆ THỐNG ĐĂNG NHẬP ====================
const LOGIN_KEY = 'yht_login_session';
const USERS = [
    { username: 'admin', password: 'admin123', role: 'admin', name: 'Quản trị viên' },
    { username: 'user', password: 'user123', role: 'user', name: 'Người dùng' }
];

let currentUser = null;

function checkLoginStatus() {
    const saved = localStorage.getItem(LOGIN_KEY);
    if (saved) {
        try {
            const session = JSON.parse(saved);
            if (session.expiry && Date.now() < session.expiry) {
                currentUser = session.user;
                document.getElementById('loginModal').style.display = 'none';
                document.getElementById('logoutBtn').style.display = 'inline-flex';
                return true;
            } else {
                localStorage.removeItem(LOGIN_KEY);
            }
        } catch(e) {}
    }
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('logoutBtn').style.display = 'none';
    return false;
}

function doLogin(username, password, remember) {
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        if (remember) {
            const session = {
                user: { username: user.username, role: user.role, name: user.name },
                expiry: Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 ngày
            };
            localStorage.setItem(LOGIN_KEY, JSON.stringify(session));
        }
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'inline-flex';
        document.getElementById('loginError').style.display = 'none';
        updateDashboard(); // Refresh dữ liệu sau khi login
        return true;
    } else {
        const errorDiv = document.getElementById('loginError');
        errorDiv.innerText = '❌ Sai tên đăng nhập hoặc mật khẩu';
        errorDiv.style.display = 'block';
        return false;
    }
}

function doLogout() {
    localStorage.removeItem(LOGIN_KEY);
    currentUser = null;
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('logoutBtn').style.display = 'none';
    // Xóa dữ liệu hiển thị để tránh nhìn thấy khi chưa login
    document.getElementById('kpiGrid').innerHTML = '';
    document.getElementById('staffTableBody').innerHTML = '';
    document.getElementById('totalStaffInfo').innerHTML = '';
}

// Gắn sự kiện
document.getElementById('doLoginBtn').addEventListener('click', () => {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const remember = document.getElementById('rememberCheckbox').checked;
    doLogin(username, password, remember);
});

document.getElementById('logoutBtn').addEventListener('click', doLogout);

// Cho phép nhấn Enter để đăng nhập
document.getElementById('loginPassword').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('doLoginBtn').click();
    }
});

// Kiểm tra trạng thái khi load trang
checkLoginStatus();

// Khởi chạy
updateDashboard();