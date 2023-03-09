import { useState } from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001/';

//ユーザー一覧を取得するカスタムフック
export const useFetchProfiles = () => {
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

    //まとめて返却したいのでオブジェクトに設定する
    return { userList, isLoading, isError, onClickFetchProfile };
}