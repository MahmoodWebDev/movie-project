import { renderHook, act } from '@testing-library/react-hooks';
import { useFetchMovies } from './useFetchMovies';

describe('useFetchMovies', () => {
  // Mocking global fetch
  global.fetch = jest.fn();

  beforeEach(() => {
    fetch.mockClear();
  });

  test('initial state', () => {
    const { result } = renderHook(() => useFetchMovies());
    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  test('successful data fetch', async () => {
    const mockData = [{ title: "Movie 1" }, { title: "Movie 2" }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetchMovies());
    
    act(() => {
      result.current.setUrl('http://example.com/movies');
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  test('failed data fetch', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    const { result, waitForNextUpdate } = renderHook(() => useFetchMovies());
    
    act(() => {
      result.current.setUrl('http://example.com/movies');
    });

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBe('Failed to fetch');
  });
});
