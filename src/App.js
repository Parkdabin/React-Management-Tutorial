import { Component } from 'react';
import './App.css';
import Customer from './Components/Customer';

const customers = [{
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: '홍길동',
  birthday: '970622',
  gender: '남자',
  job: '대학생'
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: '박다빈',
  birthday: '970625',
  gender: '여자',
  job: '대학생'
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: '이구아나',
  birthday: '940625',
  gender: '남자',
  job: '회사원'
}]

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        {
          customers.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              ></Customer>
            )
          })
        }
      </div>
    );
  }

}

export default App;