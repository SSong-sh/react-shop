import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { addCount } from "./../store.js";

function Cart() {
  let state = useSelector((state) => state); //Redux store 가져와줌
  let cartItems = useSelector((state) => state.cart); //Redux store 가져와줌
  let dispatch = useDispatch(); //store.js로 요청을 보내주는 함수

  console.log(cartItems);

  return (
    <div>
      {state.cart.map((a, i) => (
        <tr key={i}>
          <td>{state.cart[i].id}</td>
          <td>{state.cart[i].name}</td>
          <td>{state.cart[i].count}</td>
          <td>
            <button
              onClick={() => {
                dispatch(addCount(state.cart[i].id));
              }}
            >
              +
            </button>
          </td>
        </tr>
      ))}
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
                    dispatch(addCount(index));
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
