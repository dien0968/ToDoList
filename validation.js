function Validation(){
    this.kiemTraRong = function(span , spanID, mess){
        if(span === ""){
            getEle(spanID).innerHTML = mess;
            return false
        }
        getEle(spanID).innerHTML = "";
        return true;
    }

    this.kiemTraTrung = function(span , spanID, mess, arr){
        var status = true;
        for (var i = 0 ; i < arr.length ; i++){
            if(span === arr[i].newTask){
                status = false;
                break;
            }
        }
            if(status){
                getEle(spanID).innerHTML = ""
                return true
            }
            getEle(spanID).innerHTML = mess;
            return false
    };
}