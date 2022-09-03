const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정 정수 : {emotion}{" "}
        </span>
        <br />
      </div>
      <span className="date">{new Date(created_date).toLocaleString()}</span>
      <div className="content">감정 : {content}</div>
    </div>
  );
};

export default DiaryItem;
