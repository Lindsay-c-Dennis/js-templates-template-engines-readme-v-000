function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
  let commentTemplate = document.getElementById("comment-template").innerHTML;
  
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += templateHTML;
}