export async function loadString(key: string): Promise<string | null> {
    try {
        return await localStorage.getItem(key)
    } catch {
        // not sure why this would fail... even reading the RN docs I'm unclear
        return null
    }
}

export async function saveString(key: string, value: string): Promise<boolean> {
    try {
        await localStorage.setItem(key, value)
        return true
    } catch {
        return false
    }
}

export async function load(key: string): Promise<any | null> {
    try {
        const item = localStorage.getItem(key)

        if (item) {
            return JSON.parse(item)
        }

        return {};
    } catch {
        return null
    }
}

export async function save(key: string, value: any): Promise<boolean> {
    try {
        localStorage.setItem(key, JSON.stringify(value))
        return true
    } catch {
        return false
    }
}

export async function remove(key: string): Promise<void> {
    try {
        await localStorage.removeItem(key)
    } catch {}
}

export async function clear(): Promise<void> {
    try {
        await localStorage.clear()
    } catch {}
}