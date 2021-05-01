import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../../helpers/firebase';


export default function WordTracking() {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('wordTracking'),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  if (loading || error) {
    return null;
  }

  const values = value.docs.map(doc => {
    const id = doc.id;
    const data = doc.data();
    return {
      phrase: id.split('_').join(' '),
      count: data.count
    };
  });

  const valueNodes = values.map((value, index) => {
    return (
      <div key={index}>{value.phrase}: {value.count}</div>
    );
  });

  return (
    <div className="words">
      {valueNodes}
    </div>
  );
}