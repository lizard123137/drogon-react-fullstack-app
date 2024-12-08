export default function Article({slug, content}: { slug: string, content: string }) {
    return (
        <article>
            <h2 className="text-2xl">{slug}</h2>
            <div>
                <p>{content}</p>
            </div>
        </article>
    );
}