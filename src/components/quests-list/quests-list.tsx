import {getLoadedQuestsStatus, selectQuests} from '../../store/quests/selectors';
import ListEmpty from '../list-empty/list-empty';
import QuestCard from '../quest-card/quest-card';
import {useAppSelector} from '../../hooks';
import {Quest} from '../../types/types';
import Spinner from '../spinner/spinner';

const QuestsList = (): JSX.Element => {
  const quests: Quest[] = useAppSelector(selectQuests);
  const isQuestsLoading = useAppSelector(getLoadedQuestsStatus);

  if (isQuestsLoading) {
    return <Spinner />;
  }

  if (!quests.length) {
    return <ListEmpty />;
  }

  return (
    <div className="cards-grid">
      {quests.map((quest) => <QuestCard key={quest.id} quest={quest} />)}
    </div>
  );
};

export default QuestsList;
