// 导出数据，本来定义是中文，因为接口接受的key是英语，所以需要进行转换
export const USER_RELATIONS = {
    姓名: "username",
    联系方式: "mobile",
    角色: "role",
    开通时间: "openTime",
};

/**
 * 解析 excel 导入的时间格式,固定写法，直接使用
 */
export const formatDate = (numb) => {
    const time = new Date((numb - 1) * 24 * 3600000 + 1);
    time.setYear(time.getFullYear() - 70);
    const year = time.getFullYear() + "";
    const month = time.getMonth() + 1 + "";
    const date = time.getDate() - 1 + "";
    // console.log(year);
    return (
        year +
        "-" +
        (month < 10 ? "0" + month : month) +
        "-" +
        (date < 10 ? "0" + date : date)
    );
};