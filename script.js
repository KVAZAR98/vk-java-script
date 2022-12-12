import { Root, View } from '@vkontakte/vkui';

<Root activeView="main">
  <View id="main" activePanel="general">
    <Panel id="general">
      {"Привет"}
    </Panel>
    <Panel id="education">
      {"Пока"}
    </Panel>
  </View>
  <View id="users-search" activePanel="users-search">
    <Panel id="users-search">
      {"Поиск"}
    </Panel>
  </View>
  <View id="check-user-actions" activePanel="check-user-actions">
    <Panel id="check-user-actions">
      {"Поиск 2"}
    </Panel>
  </View>
</Root>