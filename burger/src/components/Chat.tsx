const Chat = () => {
  return (
    <>
      <h1>Chat:</h1>
      <p style={{ color: 'blue' }}>Pipari: Chat, is this real?</p>
      <p style={{ color: 'orange' }}>Zilver: No way...</p>
      <p style={{ color: 'green' }}>Wurdle: Crazy lol</p>
      <input
        type="text"
        placeholder="Enter a message (broken rn)"
        style={{ width: 275, fontFamily: 'mc' }}
      />
      <button style={{ paddingLeft: 20, paddingRight: 20, fontFamily: 'mc' }}>
        Send
      </button>
    </>
  );
};

export default Chat;
