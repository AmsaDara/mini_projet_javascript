        let arr = [];
    
        let btn_add = document.getElementById("additem");
        let btn_delete = document.getElementById("deleted");
        
        

        function get_update() {
            let prenom = document.getElementById("prNom").value;
            let nom = document.getElementById("snNom").value;
            let adresse = document.getElementById("snAdres").value;
            let entreprise = document.getElementById("snEntrepise").value;
            arr.push([prenom, nom, adresse, entreprise]);
            addToLocalStorage(arr);
            }

            function update() {
                str = "";
                arr.forEach((element, index) => {
                    str =
                    str +
                    `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td>${element[2]}</td>
                        <td>${element[3]}</td>
                        <td><button type="submit" class="btn btn-primary btn-sm " onclick="deleted(${index})" >OUI</button></td>
                     </tr>`;
                });
                document.getElementById("tableBody").innerHTML = str;
                }
        
                function addToLocalStorage(arr) {
                localStorage.setItem("arr", JSON.stringify(arr));
                    update(arr);
                }
                

                    function getFromLocalStorage() {
                        const reference = localStorage.getItem("arr");
                        if (reference) {
                            arr = JSON.parse(reference);
                            addToLocalStorage(arr);
                        }
                        }
                    

        function deleteTodo(id) {
        arr = arr.filter(function (item) {
            return item.id != id;
        });

        addToLocalStorage(arr);
        }
        getFromLocalStorage();
        
        function deleted(item_index) {
        arr.splice(item_index, 1);

        addToLocalStorage(arr);
        }
        
        btn_add.addEventListener("click", () => {
            get_update(arr);
            });
        
        
        
        //     todoList = [];
        //     let inserer = document.getElementById("ajt");
        //     let supp = document.getElementById("deleted");

        //     function avant_down() {
        //         let dte = document.getElementById('dateTransaction').value;
        //         let desc = document.getElementById('description').value;
        //         let clt = document.getElementById('Client').value;
        //         let codeClt = document.getElementById('codeClient').value;
        //         let creClt = document.getElementById('creditClient').value;
        //         let codeClt_1 = document.getElementById('codeClient_1').value;
        //         let creClt_1 = document.getElementById('creditClient_1').value;
        //         todoList.push([dateTransaction, description, Client, codeClient, creditClient, codeClient_1,creditClient_1]);
        //         down();
        //     }

        //     function down() {

        //         str = "";
        //         todoList.forEach((element, item_index) => {
        //             str = str +
        //                 `<tr>
        //                     <th scope="row">${item_index + 1}</th>
        //                     <td>${element[0]}</td>
        //                     <td>${element[1]}</td>
        //                     <td>${element[2]}</td>
        //                     <td>${element[3]}</td>
        //                     <td>${element[4]}</td>
        //                     <td>${element[5]}</td>
        //                     <td>${element[6]}</td>
        //                     <td>${element[7]}</td>
        //                 </tr>`
        //         });
        //         document.getElementById("contenuBody").innerHTML = str;

        //     }

        //     function addToLocalStorage(todoList) {
        //         localStorage.setItem("todoList", JSON.stringify(todoList));
        //             down(todoList);
        //         }
                

        //             function getFromLocalStorage() {
        //                 const reference = localStorage.getItem("todoList");
        //                 if (reference) {
        //                     todoList = JSON.parse(reference);
        //                     addToLocalStorage(todoList);
        //                 }
        //                 }
                    

        // function deleteTodo(id) {
        // todoList = todoList.filter(function (item) {
        //     return item.id != id;
        // });

        // addToLocalStorage(todoList);
        // }
        // getFromLocalStorage();
        
        // function deleted(item_index) {
        // todoList.splice(item_index, 1);

        // addToLocalStorage(todoList);
        // }
        
        // inserer.addEventListener("click", () => {
        //     avant_down(arr);
        //     });;
