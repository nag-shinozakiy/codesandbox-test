import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  document.getElementById("add-text").focus();

  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  // divタグにクラスを追加
  div.className = "list-row";
  // p生成
  const p = document.createElement("p");
  // pタグの値にinputの内容を追加
  p.innerText = inputText;
  // button（完了）タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener(
    "click",
    function (e) {
      // 押された完了ボタンの親の親タグ(li)を未完了リストから削除
      // closestは親要素を遡り()内で指定した１番近い要素を返却するもの
      deleteFromIncompleteList(deleteButton.closest("li"));
      // 完了リストに追加する要素
      const addTarget = completeButton.closest("li");
      // ToDo内容を取得
      const text = addTarget.querySelector("p").innerText;
      // div以下を初期化  liタグのみになる
      addTarget.textContent = null;
      // divタグを生成
      const div = document.createElement("div");
      // divタグにクラスを追加
      div.className = "list-row";
      // p生成
      const p = document.createElement("p");
      // pタグの値にinputの内容を追加
      p.innerText = text;
      // button（戻す）タグの生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      // divタグの子要素に各要素を設定
      div.appendChild(p);
      div.appendChild(backButton);
      // liタグの子要素に各要素を設定
      addTarget.appendChild(div);
      // 完了リストに追加
      document.getElementById("complete-list").appendChild(li);

      console.log(addTarget);
    },
    false
  );
  // button（削除）タグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener(
    "click",
    function (e) {
      // 押された削除ボタンの親の親タグ(li)を未完了リストから削除
      // closestは親要素を遡り()内で指定した１番近い要素を返却するもの
      deleteFromIncompleteList(deleteButton.closest("li"));
    },
    false
  );

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // liタグの子要素に各要素を設定
  li.appendChild(div);
  // 未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  target.remove();
};

document
  .getElementById("add-button")
  .addEventListener("click", onClickAdd, false);
