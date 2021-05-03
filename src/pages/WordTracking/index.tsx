import firebase from 'helpers/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function WordTracking() {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('wordTracking'),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  if (loading || error || !value) {
    return null;
  }

  const values = value.docs.map(doc => {
    const id = doc.id;
    const data = doc.data();
    return {
      phrase: id.replaceAll('_', ' '),
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