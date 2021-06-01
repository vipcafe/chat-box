class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
    # or
    # stream_from "room_#{params[:room]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
