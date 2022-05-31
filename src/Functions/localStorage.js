const key ='exams'
import getId from './Functions/getId';

export function create(obj){
    let data = localStorage.getItem(key);
    if (null=== data){
        data=JSON.stringify([]);
    }
    data=JSON.parse(data);
    data.id=getId(key+"_id");
    data.push(obj);
    data=JSON.stringify(data);
    localStorage.setItem(key,data);


}
