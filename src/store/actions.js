export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id
  }
})

const getId = () => {
  return `${Math.random().toString(36).substr(2,9)}`
};

export const addItem = (itemType, itemContent) => ({
  type: 'ADD_ITEM',
  payload: {
    itemType,
    item: {
      id: getId(),
      ...itemContent
    }
  }
})