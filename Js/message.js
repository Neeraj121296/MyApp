window.addEventListener("load", bindEvents);

var primaryId=0;
function bindEvents() {
      document.getElementById("post").addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {

          doPost();
        }
    });

    document.getElementById("postBt").addEventListener("click", doPost);

}


function doPost(event) {

    var img = document.getElementById("imgUrl").value;
    var post = document.getElementById("post").value;

    if (post == ""){

        alert("Ask Your Question ");
    } else {
           
        CrudOperation.addPost(post, img, "Neeraj Joshi");
        var lastAdded = CrudOperation.postlist[CrudOperation.postlist.length - 1];
        console.log(lastAdded);
        printRecord(lastAdded);
 document.getElementById("imgUrl").value="";
    document.getElementById("post").value="";
    }
    
}
var cell;

function printRecord(postObject) {
    var tbody = document.getElementById("posts");
    var tr = tbody.insertRow();
    cell = tr.insertCell(0);
 
    cell.innerHTML = "<b>" + postObject.postBy + "</b>" + "&nbsp;" + "asked"+ "&nbsp;&nbsp;" +"<small>"+"<small>" + postObject.postDate+ "</small>" +"</small>"+"</br>" + "<b>" + postObject.postName + "</b>" + "<br>" + "<img src='" + postObject.img + "'>";
    
    var uniId = CrudOperation.id;
    showComment = document.createElement("BUTTON");

    showComment.className = "commentButton";
    showComment.id = "answerId" + uniId;
    showComment.innerHTML = "answer";
    cell.appendChild(showComment);
    
    var garbageElement = document.createElement("span");
    garbageElement.innerHTML = "</br>";
    garbageElement.id="element"+uniId;
    cell.appendChild(garbageElement);
   
    defaultElement = document.createElement("span");
    defaultElement.innerHTML = "";
    defaultElement.id = "spanELement" + uniId;
    cell.appendChild(defaultElement);
     document.getElementById("answerId" + uniId).onclick = function () {
        showCommentBox(showComment.id,"element"+uniId, "spanELement" + uniId);
      document.getElementById("answerId" + uniId).disabled = true;
    };
}

function showCommentBox(showCommentId,spanId,defaultId) {
var uniId=primaryId;
    primaryId++;
//    var uniId = CrudOperation.id;
 //   var addButtonId = "addButton" + uniId;
//    var texId = "addButtonId" + uniId;
    Commentarea = document.createElement("textarea");
    Commentarea.className = "textAreaProp";
    Commentarea.id = "addButtonId" + uniId;

    document.getElementById(spanId).appendChild(Commentarea);

    Commentarea.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
             console.log("addButtonId" + uniId);
            doComment(defaultId,"addButtonId" + uniId);
        }
    });

}

function doComment(spanId, commentAreaId) {



    var commentValue = document.getElementById(commentAreaId).value;
    
    console.log("value is " + commentValue);

    var post = new Post();
    post.addComment(commentValue, "Neeraj Joshi");


    var lastAddedComment = post.comments[post.comments.length - 1];

console.log(lastAddedComment);
    commentRecord(lastAddedComment, spanId);
document.getElementById(commentAreaId).value="";
}
var CommentArea;

function commentRecord(commentObject, spanId) {

   
    var finalComment = document.createElement('div');
    finalComment.innerHTML = "<b>" + commentObject.commentBy + "</b>" + "&nbsp;" + "answered" + "&nbsp;&nbsp;" + "<small>"+ "<small>" + commentObject.date + "</small>" +"</small>" + "<br>" + "<b>" + commentObject.commentValue + "</b>" + "<br>";
    CommentArea = document.getElementById(spanId);


    CommentArea.appendChild(finalComment);

}
