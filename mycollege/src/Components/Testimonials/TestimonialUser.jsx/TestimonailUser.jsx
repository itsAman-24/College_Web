import './TestimonailUser.css';

const TestimonailUser = (props) => {

    const { img, name, company, description} = props;
  return (
    <li className='list-item'>
      <div className="slide">
        <div className="user-info">
          <img src={img} alt="" />
          <div>
            <h3>{name}</h3>
            <span>{company}</span>
          </div>
        </div>
        <p>
          {description}
        </p>
      </div>
    </li>
  );
};

export default TestimonailUser;
