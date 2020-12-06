import React from 'react';
import $ from 'jquery';

class ChatBtn extends React.Component {
    componentDidMount() {
        $(document).ready(function() {
            var duration = 500;
            $(window).scroll(function() {
                $('.chat-btn').fadeIn(duration);
            });
     
            $('.chat-btn').click(function(event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
        });

        $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('.modal-title').text('New message to ' + recipient)
            modal.find('.modal-body input').val(recipient)
        })
    }

    render(){
        return (
            <React.Fragment>
                <button class="chat-btn" data-toggle="modal" data-target="#exampleModal">
                    <i className="far fa-comment-alt fa-xs"></i>
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModal">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                This is some sample text. Click in any empty area or on close button to close modal.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ChatBtn