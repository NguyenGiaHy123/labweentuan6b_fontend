import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import './App.css'
export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} className="imgpost" alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
       <p><span className="dam">Name</span> :{title}</p>
        </Link>
        <p className="">
         
          <p><span  className="dam">author</span> :{author.username}</p>
          
        </p>
      
        <p><span  className="dam">Time </span> :  <time>{formatISO9075(new Date(createdAt))}</time></p>
        <p><span  className="dam">summary</span> :{author.username}</p>
        
        <p ></p>
      </div>
    </div>
  );
}