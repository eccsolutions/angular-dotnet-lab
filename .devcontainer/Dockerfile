FROM mcr.microsoft.com/dotnet/sdk:10.0

# Install basic development utilities that are not guaranteed by the base image.
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        sudo \
        git \
        ca-certificates \
        bash-completion \
    && rm -rf /var/lib/apt/lists/*

# Make sure the existing non-root user can use sudo.
RUN echo "ubuntu ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/ubuntu \
    && chmod 0440 /etc/sudoers.d/ubuntu

USER ubuntu

WORKDIR /workspaces/angular-dotnet-lab