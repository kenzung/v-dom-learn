import * as myreact from '../dist/myreact';

const List = ({ data }) => (
  <ul>
    <li>{data}</li>
    <li>{data}</li>
    <li>{data}</li>
  </ul>
);

const mydata = 111;

const demo = (
  <div className="testDiv">
    normalTest
    <h2>title</h2>
    <List data={mydata} />
  </div>
);

console.log(demo);