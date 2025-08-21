// 获取原始响应体
const body = $response.body;
// 打印日志，确认脚本是否被触发
console.log('Weverse DM 脚本已触发！原始数据：' + body);

// 尝试解析 JSON
try {
    let obj = JSON.parse(body);

    // 修改 renewalDays 字段
    obj.renewalDays = 30;
    
    // 将修改后的对象转回字符串
    const modifiedBody = JSON.stringify(obj);
    
    // 打印日志，确认修改是否成功
    console.log('Weverse DM 数据修改成功！新数据：' + modifiedBody);
    
    // 返回修改后的响应体
    $done({body: modifiedBody});

} catch (e) {
    // 如果 JSON 解析失败，打印错误日志
    console.log('Weverse DM 脚本错误：' + e.message);
    // 返回原始数据，避免应用出错
    $done({});
}