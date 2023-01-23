

      let post = [
        { id: 1, title: "Hi", desc: "Hi,this is the first post" },
        { id: 2, title: "Hlo", desc: "Hi,this is the Second post" },
        { id: 3, title: "Hey", desc: "Hi,this is the third post" },
      ];

      let comments =[
        { msg:"Awesome Post",postId:1},
        { msg:"Good Content",postId:1},
        { msg:"Amazing",postId:2},
        { msg:"wow",postId:3},
        { msg:"Good one",postId:1},

      ];
      post.forEach(Merging_comments);
      console.log('after',post);
      
      
      
      function Merging_comments(x){
    
        let new_comment=[];
        for(let i=0;i<comments.length;i++){
            if(comments[i].postId==x.id){
                new_comment.push(comments[i]);
            }
        }
        x.comment = new_comment;

      };
   


