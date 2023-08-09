import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let cartItems = useSelector((state) => state.cart); //Redux store 가져와줌
  console.log(cartItems);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>변경 버튼</td>{" "}
              {/* 여기에 변경 버튼을 추가하거나 원하는 내용을 삽입하세요 */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
