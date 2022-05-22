/**
 * @desc 转tree
 * @param data      原数据
 * @param pid       pid的值
 * @param pdata     父级的data
 * @param children  字集的名称
 * @returns {*[]}
 */
export const toTree = (data, pid, pdata, children) => {
    let a = [], b = [];
    data.forEach((item) => {
        if (item.pid === pid) {
            a.push(item)
        } else {
            b.push(item)
        }
    })
    if (pdata === null) {
        pdata = a;
    } else {
        pdata[children] = a;
    }
    if (b.length > 0) {
        a.forEach(item => {
            toTree(b, item.id, item, children);
        })
    }
    return a;
}
//寻找树形结构的树杈
export const lookingBranch = (data,pid)=>{
    let a = [],b = [],c = [];
    data.forEach(item =>{
        if(item.pid === pid){
            a.push(item);
        }else{
            b.push(item);
        }
    })
    if (a.length>0){
        a.forEach(item=>{
            c = lookingBranch(b,item.id);
        })
    }
    a.concat(c);
    return a;
}


/**
 * @desc 复制内容到剪贴板
 * @param txt
 */
export const copyText = function (txt) {
    const input = document.createElement('input')
    input.value = txt
    document.body.appendChild(input)
    input.select()
    document.execCommand('Copy')
    document.body.removeChild(input)
}