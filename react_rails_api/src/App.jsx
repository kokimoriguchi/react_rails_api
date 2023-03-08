import { useState } from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001/';

export const App = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //ユーザー取得ボタン押下アクション
  const onClickFetchProfile = () => {
    //ボタン押下時にローディングフラグon、エラーフラグoff
    setIsLoading(true);
    setIsError(false);

    //APIの実行
    axios
      .get("api/v1/profiles.json")
      .then(result => {
        //苗字と名前を結合するよう変換
        const profiles = result.data.map(profile => ({
          id: profile.id,
          name: `${profile.lastname}${profile.firstname}`,
          age: profile.age  
        }));
        //ユーザー一覧stateを更新
        setUserList(profiles);
      })
      //エラーの場合はエラーフラグをon
      .catch(() => setIsError(true))
      //処理完了後はローディングフラグをoff
      .finally(() => setIsLoading(false));
  };
  
  return (
    <div>
      <button onClick={onClickFetchProfile}>ユーザー取得</button>
      {/*エラーの場合はエラ〜メッセージを表示 */}
      {isError && <p style={{ color: "red" }} >エラーが発生しました</p>}

      {/*ローディング中は表示を切り替える */}
      {isLoading ? (<p>データ取得中です</p>) : (userList.map(profile => (
      <p key={profile.id}>{`${profile.id}:${profile.name} (${profile.age}歳)`}</p>
      ))
      )}
    </div>
  );
};