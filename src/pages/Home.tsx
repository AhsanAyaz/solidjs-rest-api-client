import { Outlet } from 'solid-app-router';
import { Component } from 'solid-js';
import { IRestRequest } from '../interfaces/rest.interfaces';

const Home: Component = () => {
  const requests: IRestRequest[] = [
    {
      id: "1",
      name: "Get Scores",
      description: "Getting scores from server",
      request: {
        method: "GET",
        url: "https://scorer-pro3.p.rapidapi.com/score/game123",
        headers: [
          {
            key: "X-RapidAPI-Host",
            value: "API_HOST_FROM_RAPID_API",
          },
          {
            key: "X-RapidAPI-Key",
            value: "API_KEY_FROM_RAPID_API",
          },
        ],
      },
    },
    {
      id: "2",
      name: "Add Score",
      description: "Adding scores to server",
      request: {
        method: "POST",
        url: "https://scorer-pro3.p.rapidapi.com/score",
        headers: [
          {
            key: "X-RapidAPI-Host",
            value: "API_HOST_FROM_RAPID_API",
          },
          {
            key: "X-RapidAPI-Key",
            value: "API_KEY_FROM_RAPID_API",
          },
        ],
        body: JSON.stringify({
          score: 100,
          gameId: "123",
          userId: "test123",
        }),
      },
    },
  ];

  return (
    <div class="flex flex-col md:flex-row gap-4 h-full flex-1">
      <div class="w-full md:w-1/4 bg-gray-200 min-h-full border-gray-300 border p-4 rounded-lg">
        <div class="flex justify-between py-4">
          <h1 class="text-sm ">Rest Requests</h1>
          <button class="flex hover:bg-opacity-60 justify-center items-center p-4 bg-purple-600 rounded-full text-white w-8 h-8" onClick={() => alert('To be implemented')}>
            <div>+</div>
          </button>
        </div>
      </div>
      <div class="flex-1 min-h-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Home;