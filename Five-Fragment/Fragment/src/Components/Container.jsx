
import css from './Container.module.css'
const Container=({children})=>{
    return <div className={css.div}>{children}</div>
}
export default Container;