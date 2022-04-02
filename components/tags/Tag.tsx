import { useTags } from './TagsContext';
import { useRouter } from 'next/router';

export function Tag({ tag, count }: { tag: string; count?: number }) {
  const { tags, toggleTags, resetTags } = useTags();
  const isSelected = tags.has(tag);
  const router = useRouter();
  const isInPost = router.asPath.includes('posts/');

  return (
    <small
      className={!isSelected || isInPost ? `link-tag` : 'link-tag-selected'}
      style={{ margin: '12px 12px 0 0', display: 'inline-block', cursor: 'pointer' }}
      onClick={() => {
        if (router.asPath.includes('posts/')) {
          router.push('/posts');
          resetTags();
        }
        toggleTags(tag);
      }}>
      {tag}
      {count && ` (${count})`}
    </small>
  );
}

export function TagList({ postTagCountMap }: { postTagCountMap: Map<'string', number> }) {
  const tags = [];
  //@ts-ignore
  for (const [tag, count] of postTagCountMap) {
    //@ts-ignore
    tags.push(<TagListItem tag={tag} count={count} />);
  }

  return (
    <div className="mb-10">
      <h2 className="pl-1 text-lg font-semibold">tags:</h2>
      <ul>{tags}</ul>
    </div>
  );
}

export function TagListItem({ tag, count }: { tag: string; count: number }) {
  return (
    <span>
      <Tag tag={tag} count={count} />
    </span>
  );
}

export function ResetTagsButton() {
  const { resetTags } = useTags();
  return (
    <div className="my-8">
      <button className={`link-tag`} onClick={resetTags}>
        reset tags
      </button>
    </div>
  );
}
