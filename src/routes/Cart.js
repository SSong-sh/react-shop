import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store";

function Cart() {
  let state = useSelector((state) => state); //Redux store 가져와줌
  let cartItems = useSelector((state) => state.cart); //Redux store 가져와줌
  let dispatch = useDispatch(); //store.js로 요청을 보내주는 함수

  console.log(cartItems);

  return (
    <div>
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        버튼
      </button>
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
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  +
                </button>
              </td>
              {/* 여기에 변경 버튼을 추가하거나 원하는 내용을 삽입하세요 */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
