var  qid = 0;
var q_amount = 0; 
    function add_1aq() { 
        if(q_amount < 30) {
            q_amount++;
            qid++;
            var d = document.getElementById("test");
            let q = document.createElement("div");
            q.classList.add("question");
            q.id = qid;
            let fragment = document.createDocumentFragment();
            let hr = document.createElement("hr");
            let tbl = document.createElement("table");
            tbl.border = 0;
            let t1 = document.createElement("tr");
            let t12 = document.createElement("td");
            let t2 = document.createElement("tr");
            t1.innerHTML = "<th colspan=3><textarea maxlength =\"200\" cols=\"70\" name=\"ota_question" + q.id + "\" rows=\"1\" placeholder =\"Введите ваш вопрос\" ></textarea></th>";
            var counter = 1;
            t2.innerHTML = "<td><input checked=\"checked\" name=\"is_true" + q.id + "\" type=\"radio\" value=1/></td><td> <textarea maxlength =\"200\" cols=\"50\" name=\"the_question" + q.id + "1\" rows=\"1\" placeholder =\"Введите вариант ответа\" ></textarea></td><td><input max=\"10\" min=\"0\" name=\"p" + q.id + "1\" step=\"0.5\" type=\"number\" value=\"1\" /></td>";
            t1.appendChild(t12);
            tbl.appendChild(t1);
            tbl.appendChild(t2);
            let btn = document.createElement("button");
            btn.type = "button";
            btn.value = qid;
            btn.name = "1plus";
            btn.innerHTML = "+";
            let del = document.createElement("button");
            del.type = "button";
            del.value = qid;
            del.name = "qdel";
            del.innerHTML = "×";
            fragment.appendChild(hr);
            fragment.appendChild(tbl);
            t12.appendChild(btn);
            t12.appendChild(del);
            del.addEventListener('click', clear);
            d.appendChild(fragment);
            btn.addEventListener('click', add1);

            function add1 (event) {
                if (counter < 10) {
                    let id = this.value;
                    counter++;
                    let v = "<td><input name=\"is_true" + id + "\" type=\"radio\" value=" + counter + "/></td><td> <textarea  maxlength =\"200\" cols=\"50\" name=\"the_question" + id + counter +  "\" rows=\"1\" placeholder =\"Введите вариант ответа\" ></textarea></td><td><input max=\"10\" min=\"0\" name=\"p" + id + counter + "\" step=\"0.5\" type=\"number\" value=\"0\" />\</td>";
                    let y2 = this.parentNode;
                    let y1 = y2.parentNode;
                    let y = y1.parentNode;
                    let tt = document.createElement("tr");
                    tt.innerHTML = v;
                    y.appendChild(tt);
                    td = document.createElement("td");
                    tt.appendChild(td);
                    let delv = document.createElement("button");
                    delv.type = "button";
                    delv.value = qid;
                    delv.name = counter;
                    delv.innerHTML = "×";
                    delv.addEventListener("click", clear_v);
                    td.appendChild(delv);
                }
                else {
                    alert("В вопросе не может быть более 10 вариантов ответа!");
                }
            }
    }
    else {
        alert("Вы можете создать не более 30 вопросов");
    }

}

    function add_maq() {
        if(q_amount < 30) { 
            q_amount++;
            qid++;
            let d = document.getElementById("test");
            let q = document.createElement("div");
            q.classList.add("question");
            q.id = qid;
            let fragment = document.createDocumentFragment();
            let hr = document.createElement("hr");
            let tbl = document.createElement("table");
            tbl.border = 0;
            let t1 = document.createElement("tr");
            let t12 = document.createElement("td");
            let t2 = document.createElement("tr");

            t1.innerHTML = "<th colspan=\"3\"><textarea maxlength =\"200\" cols=\"70\" name=\"mta_question" + q.id + "\" rows=\"1\" placeholder =\"Введите ваш вопрос\" ></textarea></th>";
            var counterm = 1;
            t2.innerHTML = "<td><label><input name=\"is_tue_answ" + q.id + "[]\" type=\"checkbox\" value=1 /></td><td> <textarea maxlength =\"200\" cols=\"50\" name=\"the_question" + q.id + "1\" rows=\"1\" placeholder =\"Введите вариант ответа\" ></textarea></label> </td><td><input max=\"10\" min=\"0\" name=\"p" + q.id + "1\" step=\"0.5\" type=\"number\" value=\"1\" /></td>";
            t1.appendChild(t12);
            tbl.appendChild(t1);
            tbl.appendChild(t2);

            let btnm = document.createElement("button");
            btnm.type = "button";
            btnm.value = qid;
            btnm.name = "mplus";
            btnm.innerHTML = "+";
            let del = document.createElement("button");
            del.type = "button";
            del.value = qid;
            del.name ="qdel";
            del.innerHTML = "×";
            del.addEventListener("click", clear);
            fragment.appendChild(hr);
            fragment.appendChild(tbl);
            t12.appendChild(btnm);
            t12.appendChild(del);
            d.appendChild(fragment);
            btnm.addEventListener('click', addm);
            
            function addm (event) {
                if (counterm < 10) {
                    counterm++;
                    let id = this.value;
                    let v = "<td><label><input name=\"is_tue_answ" + id + "[]\" type=\"checkbox\" value=" + counterm + "/></td><td> <textarea maxlength =\"200\" cols=\"50\" name=\"the_question" + id + counterm +  "\" rows=\"1\" placeholder =\"Введите вариант ответа\" ></textarea></label> </td><td><input max=\"10\" min=\"0\" name=\"p" + id + counterm + "\" step=\"0.5\" type=\"number\" value=\"1\" /></td>";
                    let y2 = this.parentNode;
                    let y1 = y2.parentNode;
                    let y = y1.parentNode;
                    let tt = document.createElement("tr");
                    tt.innerHTML = v;
                    y.appendChild(tt);
                    td = document.createElement("td");
                    tt.appendChild(td);
                    let delv = document.createElement("button");
                    delv.type = "button";
                    delv.value = qid;
                    delv.name = counterm;
                    delv.innerHTML = "×";
                    delv.addEventListener("click", clear_v);
                    td.appendChild(delv);
                }
                else {
                    alert("В вопросе не может быть более 10 вариантов ответа!");
                }
                
                
            }
    }
    else {
        alert("Вы можете создать не более 30 вопросов");
    }
}

    function add_qwa() {
        if (q_amount < 30) {
            q_amount++;
            qid++;
            let d = document.getElementById("test");
            let q = document.createElement("div");
            q.classList.add("question");
            let i = document.getElementsByClassName("question");
            q.id = qid;
            let fragment = document.createDocumentFragment();
            let hr = document.createElement("hr");
            let tbl = document.createElement("table");
            tbl.border = 0;
            let t1 = document.createElement("tr");
            let t12 = document.createElement("td");
            t1.innerHTML = "<th colspan=\"2\"><textarea maxlength =\"200\" cols=\"70\" name=\"nta_question" + q.id + "\" rows=\"1\" placeholder =\"Введите ваш вопрос\" ></textarea></th><td><input max=\"10\" min=\"0\" name=\"p" + q.id + "\" step=\"0.5\" type=\"number\" value=\"5\" /></td>";
            t1.appendChild(t12);
            tbl.appendChild(t1);
            let del = document.createElement("button");
            del.type = "button";
            del.value = qid;
            del.name ="qdel";
            del.innerHTML = "×";
            del.addEventListener("click", clear);
            t12.appendChild(del);
            fragment.appendChild(hr);
            fragment.appendChild(tbl);
            d.appendChild(fragment);

        }
        else {
            alert("Вы можете создать не более 30 вопросов");
        }
    }

     function clear(event) {
            let id = this.value;
            let f2 = this.parentNode;
            let f1 = f2.parentNode;
            let f = f1.parentNode;
            fhr = f.previousElementSibling;
            fhr.remove();
            f.remove();
            q_amount--;
        }

    function clear_v(event) {
        let k = event.target;
        let k1 = k.parentNode;
        let k2 = k1.parentNode;
        k2.remove();
        if (this.name == "dr") {
            g--;
        }
    }
    var g = 1;
    let r1 = document.getElementById("res");
    let table = document.createElement("table");
    let rb = document.createElement("button");
    rb.type = "button";
    rb.innerHTML = "+";
    r1.appendChild(rb);
    r1.appendChild(table);
    rb.addEventListener("click", res);
    function res (event) {
        if (g < 16) {
                g++;
                let tr1 = document.createElement("tr");
                tr1.innerHTML = "<td>от <input max=\"10\" min=\"0\" name=\"v" + (g-1) + "\" step=\"0.5\" type=\"number\" value=\""+ (g-1) + "\" /></td><td> <textarea maxlength =\"200\" cols=\"50\" name=\"res" + g + "\" rows=\"1\" placeholder =\"Введите результат\" ></textarea></td>";
                table.appendChild(tr1);
                let td1 = document.createElement("td");
                tr1.appendChild(td1);
                let delv = document.createElement("button");
                td1.appendChild(delv);
                delv.type = "button";
                delv.innerHTML = "×";
                delv.name = "dr";
                delv.addEventListener("click", clear_v);
                td1.appendChild(delv);
            }
            else {
                alert("Вы пытаетесь добавить слишком много критериев");
            } 
    }
