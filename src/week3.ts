const todo = {
    todoArray:["first task","2nd task","3rd task"],
    darkMode: false,
    hoverIndex: false,
    
    render(){
    const todoList = document.querySelector("#todo-List")

    let todoBigArray = ''
    for (const item of this.todoArray){
        
        let bgColor = 'White'
        let textColor = 'Black'
        if (this.darkMode){
            bgColor = 'Black'
            textColor = 'White'
        }

        if (this.hoverIndex){
            bgColor = 'Blue'
        }


        todoBigArray += `<div class = "todo-item" style = "background-color : ${bgColor},>${item}</div> `
    }


    todoList.innerHTML = todoBigArray

    const todoItems = document.querySelectorAll(".todo-item")

    for (let index = 0; index < todoItems.length; index++) {
        const todoItem = todoItems[index];

        todoItem.addEventListener('click',e => {
            this.darkMode = !this.darkMode

        todoItem.addEventListener('mouseover',e => {
            this.hoverIndex = !this.hoverIndex
            this.render()
        })
        })
    }
    }
    }


todo.render()