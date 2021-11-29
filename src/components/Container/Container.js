import style from "./container.module.css"
export const Container = ({ title, children }) => {
    return (
        <section className = {style.container}>
            <h2 className = {style.title}>{title}</h2>
            {children}
        </section>)
};