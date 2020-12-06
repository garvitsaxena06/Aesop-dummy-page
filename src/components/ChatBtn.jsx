import React from 'react';
import $ from 'jquery';

class ChatBtn extends React.Component {
    componentDidMount() {
        $(document).ready(function() {
            var offset = 0;
            var duration = 500;
            $(window).scroll(function() {
                $('.back-to-top').fadeIn(duration);
            });
     
            $('.back-to-top').click(function(event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
        });
    }

    render(){
        return (
            <a href="#top" className="back-to-top"><i className="far fa-comment-alt"></i></a>
        )
    }
}

export default ChatBtn