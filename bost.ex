defmodule ModPresenceDemo do
  @behaviour :gen_mod

  def start(_host, _opts) do
    :ok
  end

  def stop(_host) do
    :ok
  end
end