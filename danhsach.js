var DanhSach = function(){

    this.array = [];

    this.addTask = function(item){
        this.array.push(item)
    };

    this.timViTri = function(id){
        return this.array.findIndex(function(item){
            return item.id === id;
        });
    };

    this.deleteTask = function(id){
        var viTri = this.timViTri(id)
        if(viTri !== -1){
            this.array.splice(viTri , 1);
        }
    };

    this.timTask = function(id){
        return this.array.find(function(item){
            return item.id === id;
        })
    }

    this.changeTask = function(task){
        var viTri = this.timViTri(task.id);
        if(viTri !== -1){
            this.array[viTri] = task
        }
    }
}