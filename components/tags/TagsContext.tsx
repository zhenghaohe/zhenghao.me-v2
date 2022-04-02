import { Dispatch, ReactNode, useContext, useReducer, createContext } from "react";

type Tags = Set<string>

type Reducer = (prevTags: Tags, tag: string) => Tags

type ContextValue = {tags: Tags, toggleTags:  Dispatch<string>, resetTags: Set<string>['clear']}

const TagsContext = createContext<undefined | ContextValue>(undefined)



export function TagsProvider({children}: {children: ReactNode, tagNames?: string[]}) {
    const [tags, toggleTags] = useReducer<Reducer>((prevTags: Tags, tag: string) => {
        if(prevTags.has(tag)) {
            prevTags.delete(tag)
        } else {
            prevTags.add(tag)
        }
        return new Set(prevTags)
    }, new Set<string>())

    const resetTags = () => tags.forEach(tag => toggleTags(tag))
    

    return <TagsContext.Provider value={{tags, toggleTags, resetTags}}>{children}</TagsContext.Provider>
}

export function useTags() {
    const context = useContext(TagsContext)
    if(!context) {
        throw new Error('useTags must be used within a TagsProvider')
    }

    return context    
}