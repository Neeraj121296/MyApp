const CrudOperation = {
    postlist: [],

    id: 1,
    
  
  
    addPost(post, img, postBy) {
       
        var postObject = new Post(this.id, post, img, postBy);
        this.postlist.push(postObject);
        this.id++;
console.log(this.postlist.length);
    },


    updatePost() {

    },
    searchPost(postId) {
        //	var subArray = this.postList.filter(function(obj){
        //			return obj.id ==postId;
        //		});
        //		return subArray;
    },
    updateComment(postId) {
        /*var arr = this.searchPost(postId);
        var obj = arr[0];
        var likeCount = obj.incrementLike();
        return likeCount;*/
              //console.log(commentValue);
        	//return this.searchPost(postId)[0].addComment(commentValue,commentBy);
    },
    deletePost() {},
    sortById() {},
  // fetchComment(commentValue, commentBy) {
//
  //      var commentObject = new Comment(this.commentId, commentValue, commentBy);
    //    var post=new Post();
       
      // post.addComment(commentObject);
      //  this.commentId++;
        


    //}
}
