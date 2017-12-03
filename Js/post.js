class Post {
 
    constructor(id, postName, img, postBy) {
        this.commentId = 1;
        this.id = id;
        this.postName = postName;
        this.img = img;
        this.postBy = postBy;
        this.postDate = new Date();
        
        this.comments = [];
       


    }
    addComment(commentValue, commentBy) {
        
        var commentObject = new Comment(this.commentId, commentValue, commentBy);
        this.commentId++;
        console.log(this.commentId);
        this.comments.push(commentObject);

 
    }




}
