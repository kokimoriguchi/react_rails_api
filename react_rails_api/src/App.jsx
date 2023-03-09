import { useState } from "react";
import { useFetchProfiles } from "./hooks/useFetchProfiles";

export const App = () => {
  //カスタムフックの使用
  //関数を実行し返却値を分割代入で受け取る
  const { userList, isLoading, isError, onClickFetchProfile } = useFetchProfiles();
  
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