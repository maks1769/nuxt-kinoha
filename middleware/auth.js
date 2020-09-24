export default function ({store, redirect}) {
  if (store.state.user === null) {
    console.log('unauthorized user')

    return redirect('/')
  }
}
