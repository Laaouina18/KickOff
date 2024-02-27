import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import MatchDetail from '../components/MatchDetail';

test('MatchDetail component', () => {
  const match = {
    id: 1,
    homeTeam: { id: 1, name: 'Home Team' },
    awayTeam: { id: 2, name: 'Away Team' },
    startTimestamp: Date.now() / 1000,
    tournament: { uniqueTournament: { id: 1 }, category: { name: 'Category' } },
    homeScore: { normaltime: 2 },
    awayScore: { normaltime: 1 }
  };

  it('renders match details correctly', () => {
    const { getByText } = render(<MatchDetail route={{ params: { match } }} />);
    
    expect(getByText(match.homeTeam.name)).toBeTruthy();
    expect(getByText(match.awayTeam.name)).toBeTruthy();
    expect(getByText(match.tournament.category.name)).toBeTruthy();
    expect(getByText(match.homeScore.normaltime.toString())).toBeTruthy();
    expect(getByText(match.awayScore.normaltime.toString())).toBeTruthy();
  });

  it('dispatches saveMatchToFavorites action when heart icon is pressed', () => {
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: () => mockDispatch
    }));

    const { getByTestId } = render(<MatchDetail route={{ params: { match } }} />);
    fireEvent.press(getByTestId('heart-icon'));

    expect(mockDispatch).toHaveBeenCalled();
  });
});
