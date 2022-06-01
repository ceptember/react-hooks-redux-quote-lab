import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeQuote, downvoteQuote, upvoteQuote } from "./quotesSlice";

function QuoteCard(props) {
  const dispatch = useDispatch(); 

   function handleUpvote(){
    dispatch(upvoteQuote(props.quote.id))
   } 

   function handleDownvote(){
    dispatch(downvoteQuote(props.quote.id))
   } 


  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p> "{props.quote.content}" </p>
            <footer>
              - 
              <cite title="Source Title">{props.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={handleUpvote}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleDownvote}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
