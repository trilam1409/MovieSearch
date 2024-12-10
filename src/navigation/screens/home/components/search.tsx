import { useEffect } from 'react';
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useAppDispatch, useAppSelector, useDebounce } from '../../../../utils/hooks.ts';
import { fetchSearchResult, handleChangeKeyword, selectSearchKeyword } from '../home-slice.ts';

export function Search() {
  const dispatch = useAppDispatch();
  const searchKeyword = useAppSelector(selectSearchKeyword);

  const debouncedQuery = useDebounce(searchKeyword, 500);

  useEffect(() => {
    if (debouncedQuery === '') {
      return;
    }

    dispatch(fetchSearchResult(debouncedQuery));
  }, [debouncedQuery]);

  return (
    <View>
      <TextInput
        value={searchKeyword}
        onChangeText={(text) => dispatch(handleChangeKeyword(text))}
        style={styles.container}
        placeholder={'Search ...'}
      />
      {searchKeyword && (
        <Pressable style={styles.closeIconWrapper} onPress={() => dispatch(handleChangeKeyword(''))}>
          <Image style={styles.closeIcon} source={require('../../../../assets/icon/cancel.png')} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 30,
    paddingLeft: 16,
    paddingRight: 32,
    paddingVertical: 8,
  },
  closeIconWrapper: {
    position: 'absolute',
    width: 16,
    height: 16,
    right: 12,
    top: '50%',
    transform: [{ translateY: '-50%' }],
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
});
